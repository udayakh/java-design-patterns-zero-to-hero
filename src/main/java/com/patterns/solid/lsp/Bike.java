package com.patterns.solid.lsp;

/**
 * Base abstraction for anything ride-able. Holds ONLY what every bike can truly
 * do, so any subtype is fully substitutable for a Bike (LSP). Engine-specific
 * behavior lives in {@link EnginePowered}, not here.
 */
public interface Bike {
    void accelerate();
}
