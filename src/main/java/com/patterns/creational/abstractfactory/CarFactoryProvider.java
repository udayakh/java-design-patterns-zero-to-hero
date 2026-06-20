package com.patterns.creational.abstractfactory;

public class CarFactoryProvider {
    public static CarFactory getCarFactory(String type) {
        if (type.equalsIgnoreCase("economy")) {
            return new EconomyCarFactory();
        } else if (type.equalsIgnoreCase("luxury")) {
            return new LuxuryCarFactory();
        }
        throw new IllegalArgumentException("Unknown car type: " + type);
    }
}
