# Tic Tac Toe — Low-Level Design

A small, extensible object-oriented design of Tic Tac Toe (the classic OOD
interview exercise). The emphasis is on **clear responsibilities** and
**extensibility** (any board size, more players) rather than clever algorithms.

## Classes & responsibilities

| Class | Responsibility |
|-------|----------------|
| [`PlayingPiece`](PlayingPiece.java) | The symbol a player places — an enum (`X`, `O`). |
| [`Player`](Player.java) | Player identity: a name + the piece they own. No game logic. |
| [`Board`](Board.java) | Owns the grid. Validates moves, lists free cells, detects a win. |
| [`TicTacToeGame`](TicTacToeGame.java) | Orchestrator: owns the board + players and drives the turn loop. |

Relationships: `TicTacToeGame` **has-a** `Board` and **has-a** `Deque<Player>`;
each `Player` **has-a** `PlayingPiece`; the `Board` holds a `PlayingPiece[][]`.

## Design decisions

- **Turns via a `Deque<Player>`.** The current player is taken from the front
  (`removeFirst`) and, after a valid move, pushed to the back (`addLast`). O(1)
  strict alternation, and it extends to more than two players without changes.
  An invalid move uses `addFirst` so the same player retries (the turn doesn't
  advance).
- **Win check lives on `Board`.** The board owns the grid, so it's the natural
  home for `checkWinner`. `TicTacToeGame` stays pure orchestration (SRP).
- **Size-driven, not hardcoded.** `Board` stores `size` and every loop (free
  cells, win check, printing) reads it. Construct `new Board(4)` and the logic
  works on a 4x4 with no other changes.
- **`addPiece` returns `boolean`, not an exception.** An occupied/out-of-bounds
  cell is an ordinary "try again" in gameplay, not an exceptional condition, so
  the caller branches on the result instead of catching.
- **Win detection is local.** After a move at `(row, col)` only that row, that
  column, and the two diagonals are checked — a completed line must pass through
  the cell just played.

## How to run

```bash
# from the project root
javac -d target/classes src/main/java/com/patterns/lld/tictactoe/*.java
java -cp target/classes com.patterns.lld.tictactoe.TicTacToeGame
```

Enter each move as two numbers — `row col` (0-based), e.g. `0 2`. Players
alternate automatically. You can also pipe a scripted game in:

```bash
printf "0 0\n1 0\n0 1\n1 1\n0 2\n" | java -cp target/classes com.patterns.lld.tictactoe.TicTacToeGame
```

### Sample output (X wins the top row)

```
X X X
O O -
- - -

Game over - winner: Player1!
```

## Where design patterns could fit (intentionally not added yet)

- **Factory** — if pieces gain behavior/state, a factory could create them.
- **Strategy** — a pluggable `WinningStrategy` would let row/col/diagonal (or
  custom) win rules vary independently of the board.

These are noted as extension points, not built — the current design keeps it
minimal on purpose.

## Possible extensions

- Bigger boards (`new Board(n)`) — already supported.
- Input validation messages / a non-numeric input guard around `Scanner`.
- More than two players (add them to the deque; gameplay already rotates N).
