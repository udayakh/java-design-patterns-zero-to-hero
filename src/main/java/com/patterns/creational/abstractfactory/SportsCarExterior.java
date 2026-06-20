package com.patterns.creational.abstractfactory;

public class SportsCarExterior implements CarExterior {
    @Override
    public void addExteriorComponents() {
        System.out.println("Adding premium exterior components for Sports Car.");
    }
    
}
