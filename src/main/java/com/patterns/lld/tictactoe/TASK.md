# Tic Tac Toe — Low-Level Design (Hands-On Task)

A classic OOD interview exercise. The goal is **clean objects + clear
orchestration + extensibility** (n x n board, new symbols), NOT clever algorithms.

## Objects & relationships (text UML)

```
            +------------------+
            |  PlayingPiece    |  (abstract / enum)
            |  + name: char    |
            +------------------+
                 ^        ^
        +--------+        +--------+
+----------------+      +----------------+
|  PieceX (X)    |      |  PieceO (O)    |
+----------------+      +----------------+

+---------------------------+
|  Board                    |
|  - size: int              |
|  - grid: PlayingPiece[][]  |
|  + addPiece(r,c,piece): boolean
|  + getFreeCells(): List<int[]>
|  + printBoard(): void     |
+---------------------------+

+----------------------+
|  Player              |
|  - name: String      |
|  - piece: PlayingPiece
+----------------------+

+------------------------------------+
|  TicTacToeGame  (orchestrator)     |
|  - players: Deque<Player>          |
|  - board: Board                    |
|  + initializeGame(): void          |
|  + startGame(): String  // winner name or "tie"
+------------------------------------+
        has-a Board, has-a Deque<Player>
```

## Build it yourself (package `com.patterns.lld.tictactoe`)

### 1. PlayingPiece
- A piece has a symbol. Start simple: an **enum** `PieceType { X, O }`, OR an
  abstract `PlayingPiece` with a `char name` and subclasses `PieceX`/`PieceO`.
  - The video shows both — pick the abstract-class version if you want room for
    pieces with behavior later (colors, rendering); enum if symbols are all you
    need. Note in a comment why you chose yours.

### 2. Board
- Holds an `int size` and a `PlayingPiece[][] grid` (null = empty cell).
- `boolean addPiece(int row, int col, PlayingPiece piece)` — place a piece ONLY if
  the cell is empty (and in-bounds); return `false` if occupied/invalid.
- `List<int[]> getFreeCells()` — used to detect a tie.
- `void printBoard()` — render the grid (symbols + separators).

### 3. Player
- `String name` + a `PlayingPiece` (the symbol this player owns). Just identity +
  choice; no game logic here.

### 4. TicTacToeGame (the orchestrator)
- `initializeGame()` — create two players, create the board, put players in a
  **`Deque<Player>`** (this is what alternates turns).
- `startGame()` loop, each turn:
  1. `poll` the player from the front of the deque (whose turn it is).
  2. Read/choose a move (row, col). For now you can hardcode or simulate moves —
     console `Scanner` input is optional.
  3. `board.addPiece(...)`. If it returns false, it's an invalid move — that
     player retries (don't advance the turn).
  4. **Check win** for the piece just placed (its row OR its column OR a diagonal
     all equal that symbol). If win → return the player's name.
  5. **Check tie** — if `getFreeCells()` is empty → return "tie".
  6. Otherwise `add` the player to the BACK of the deque and continue.

### 5. Demo / main
- A small `main` (in the game class or a `TicTacToeDemo`) that runs a scripted
  game and prints the board + the result.

## Done when
- Two players alternate strictly (the `Deque` rotation enforces it).
- A completed row, column, or either diagonal of one symbol declares that player
  the winner; a full board with no winner is a tie.
- `addPiece` rejects occupied / out-of-bounds cells (the player re-moves).
- Changing `size` from 3 to 4 needs NO logic changes beyond the win check reading
  `size` (i.e. don't hardcode `3`). That's the extensibility goal.

## Design points the interviewer probes (think about these)
- **Why a `Deque` for turns?** O(1) rotate: poll front, push back — clean
  alternation, and extends to >2 players for free.
- **Single Responsibility:** Board knows placement/state; Player is identity;
  Game owns orchestration. Win logic lives in the Board or Game — pick one and be
  consistent (Board is common, since it owns the grid).
- **Where do patterns hide here?** The piece hierarchy is a Factory candidate; a
  pluggable win-strategy is a Strategy candidate. Don't over-engineer now — just
  note where they'd fit.

## When you're done
Ping me and I'll review — SRP across the classes, the deque turn logic, the win
check reading `size` (not a hardcoded 3), and `addPiece` validation.
