package com.patterns.solid.lsp;

/**
 * BAD DESIGN — sets up an LSP violation.
 *
 * This interface assumes EVERY bike has an engine. A Bicycle is a bike but has
 * no engine, so it is forced to implement these methods dishonestly (see
 * Bicycle.java). Any code that takes a `Bike` and calls turnOnEngine() will
 * break when handed a Bicycle — the subtype is NOT substitutable.
 */
public interface Bike {

    void turnOnEngine();

    void accelerate();
}
