package com.patterns.lld.tictactoe;

import java.util.ArrayList;
import java.util.List;

/**
 * The game grid. Owns cell state, move validation, and win detection
 * (it owns the grid, so the win check lives here). Works for any size.
 */
public class Board {
    private final int size;
    private final PlayingPiece[][] grid;

    public Board(int size) {
        this.size = size;
        this.grid = new PlayingPiece[size][size];
    }

    public int getSize() {
        return size;
    }

    /**
     * Place a piece if the cell is in-bounds and empty.
     * Returns false for an occupied or out-of-bounds cell (a normal "try again",
     * not an exception) so the caller can let the player re-move.
     */
    public boolean addPiece(int row, int col, PlayingPiece piece) {
        if (row < 0 || row >= size || col < 0 || col >= size) {
            return false;
        }
        if (grid[row][col] != null) {
            return false;
        }
        grid[row][col] = piece;
        return true;
    }

    /** All empty cells as {row, col} pairs. Empty list => board full (tie). */
    public List<int[]> getFreeCells() {
        List<int[]> freeCells = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (grid[i][j] == null) {
                    freeCells.add(new int[] { i, j });
                }
            }
        }
        return freeCells;
    }

    /**
     * Has {@code piece} just won by completing the row, column, or a diagonal
     * through (row, col)? Reads {@code size}, so it scales to any board.
     */
    public boolean checkWinner(int row, int col, PlayingPiece piece) {
        boolean rowWin = true, colWin = true, diagWin = true, antiDiagWin = true;
        for (int i = 0; i < size; i++) {
            if (grid[row][i] != piece) rowWin = false;
            if (grid[i][col] != piece) colWin = false;
            if (grid[i][i] != piece) diagWin = false;
            if (grid[i][size - 1 - i] != piece) antiDiagWin = false;
        }
        return rowWin || colWin || diagWin || antiDiagWin;
    }

    public void printBoard() {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                System.out.print((grid[i][j] == null ? "-" : grid[i][j]) + " ");
            }
            System.out.println();
        }
        System.out.println();
    }
}
