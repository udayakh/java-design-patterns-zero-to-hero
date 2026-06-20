package com.patterns.creational.abstractfactory;

/** Concrete product — Luxury family, interior. */
public class LuxuryCarInterior implements CarInterior {
    @Override
    public void addInteriorComponents() {
        System.out.println("Adding luxurious interior components for Luxury Car.");
    }
}
