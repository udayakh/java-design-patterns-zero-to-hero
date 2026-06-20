package com.patterns.creational.abstractfactory;

/** Concrete product — Economy family, exterior. */
public class EconomyCarExterior implements CarExterior {

    @Override
    public void addExteriorComponents() {
        System.out.println("Adding economy car exterior components...");
    }
}
