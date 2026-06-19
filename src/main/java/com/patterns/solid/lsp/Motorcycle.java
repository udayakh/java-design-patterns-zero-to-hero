package com.patterns.solid.lsp;

/** Honest implementer — a motorcycle really does have an engine. */
public class Motorcycle implements Bike, EnginePowered {

    private boolean engineOn = false;

    @Override
    public void turnOnEngine() {
        engineOn = true;
        System.out.println("Motorcycle engine started.");
    }

    @Override
    public void accelerate() {
        if (!engineOn) {
            throw new IllegalStateException("Start the engine first!");
        }
        System.out.println("Motorcycle accelerating with the throttle.");
    }
}
