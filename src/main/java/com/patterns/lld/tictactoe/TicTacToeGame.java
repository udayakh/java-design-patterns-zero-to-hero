package com.patterns.lld.tictactoe;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Scanner;

/**
 * Orchestrates a game: owns the board and the players, and drives the turn loop.
 *
 * Turns rotate through a Deque — the current player is taken from the front and,
 * after a valid move, pushed to the back. That gives O(1) strict alternation and
 * extends to more than two players for free.
 */
public class TicTacToeGame {
    private Deque<Player> players;
    private Board board;

    public void initializeGame() {
        players = new LinkedList<>();
        players.addLast(new Player("Player1", PlayingPiece.X));
        players.addLast(new Player("Player2", PlayingPiece.O));
        board = new Board(3);
    }

    /**
     * Runs the turn loop until someone wins or the board fills.
     * Returns the winner's name, or "Tie".
     */
    public String startGame(Scanner scanner) {
        while (true) {
            board.printBoard();

            // No cells left and nobody has won yet => tie.
            if (board.getFreeCells().isEmpty()) {
                return "Tie";
            }

            Player current = players.removeFirst();
            System.out.println(current.getName() + " (" + current.getPlayingPiece()
                    + ") - enter row and column:");
            int row = scanner.nextInt();
            int col = scanner.nextInt();

            boolean placed = board.addPiece(row, col, current.getPlayingPiece());
            if (!placed) {
                System.out.println("Invalid move (occupied or out of bounds). Try again.");
                players.addFirst(current); // same player retries; turn does not advance
                continue;
            }

            if (board.checkWinner(row, col, current.getPlayingPiece())) {
                board.printBoard();
                return current.getName();
            }

            players.addLast(current); // hand the turn to the next player
        }
    }

    public static void main(String[] args) {
        TicTacToeGame game = new TicTacToeGame();
        game.initializeGame();

        try (Scanner scanner = new Scanner(System.in)) {
            String result = game.startGame(scanner);
            if (result.equals("Tie")) {
                System.out.println("Game over - it's a tie!");
            } else {
                System.out.println("Game over - winner: " + result + "!");
            }
        }
    }
}
