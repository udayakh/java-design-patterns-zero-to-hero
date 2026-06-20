package com.patterns.creational.abstractfactory;

/** Concrete product — Luxury family, exterior. */
public class LuxuryCarExterior implements CarExterior {

    @Override
    public void addExteriorComponents() {
        System.out.println("Adding luxury car exterior components...");
    }
}
