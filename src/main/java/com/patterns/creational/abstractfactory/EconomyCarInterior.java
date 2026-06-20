package com.patterns.creational.abstractfactory;

/** Concrete product — Economy family, interior. */
public class EconomyCarInterior implements CarInterior {
    @Override
    public void addInteriorComponents() {
        System.out.println("Adding basic interior components for Economy Car.");
    }
}
