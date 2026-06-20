package com.patterns.creational.abstractfactory;

public class SportsCarFactory implements CarFactory {
    @Override
    public CarInterior createInterior() {
        return new SportsCarInterior();
    }

    @Override
    public CarExterior createExterior() {
        return new SportsCarExterior();
    }
    
}
