package com.patterns.solid.lsp;

/**
 * BAD DESIGN — the LSP violation made concrete.
 *
 * A Bicycle has no engine, but the Bike interface forces it to implement
 * turnOnEngine(). It "solves" this by throwing — which means a Bicycle CANNOT
 * stand in for a Bike everywhere a Bike is expected. That is the violation.
 */
public class Bicycle implements Bike {

    @Override
    public void turnOnEngine() {
        throw new UnsupportedOperationException("A bicycle has no engine!");
    }

    @Override
    public void accelerate() {
        System.out.println("Bicycle accelerating by pedaling.");
    }
}
