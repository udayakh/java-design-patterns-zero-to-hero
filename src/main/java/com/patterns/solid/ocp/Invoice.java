package com.patterns.solid.ocp;

/** Minimal supporting type for the OCP exercise. */
public class Invoice {

    private final int id;

    public Invoice(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}
