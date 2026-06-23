package com.patterns.lld.tictactoe;

/** A player's identity: a name and the piece (symbol) they play. No game logic. */
public class Player {
    private final String name;
    private final PlayingPiece playingPiece;

    public Player(String name, PlayingPiece playingPiece) {
        this.name = name;
        this.playingPiece = playingPiece;
    }

    public String getName() {
        return name;
    }

    public PlayingPiece getPlayingPiece() {
        return playingPiece;
    }
}
