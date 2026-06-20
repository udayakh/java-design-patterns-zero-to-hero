package com.patterns.creational.abstractfactory;

public class SportsCarInterior implements CarInterior {
    @Override
    public void addInteriorComponents() {
        System.out.println("Adding premium interior components for Sports Car.");
    }
    
}
