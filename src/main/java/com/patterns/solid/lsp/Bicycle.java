package com.patterns.solid.lsp;

/**
 * An honest Bike. It implements only what it can actually do — no engine, so it
 * never implements (or throws from) an engine method. A Bicycle is therefore a
 * safe substitute anywhere a Bike is expected.
 */
public class Bicycle implements Bike {

    @Override
    public void accelerate() {
        System.out.println("Bicycle accelerating by pedaling.");
    }
}
