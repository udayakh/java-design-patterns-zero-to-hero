package com.patterns.creational.abstractfactory;

public class AbstractFactoryDemo {
    public static void main(String[] args) {
        // Create an economy car factory
        CarFactory economyCarFactory = new EconomyCarFactory();
        CarInterior economyCarInterior = economyCarFactory.createInterior();
        CarExterior economyCarExterior = economyCarFactory.createExterior();

        // Create a luxury car factory
        CarFactory luxuryCarFactory = new LuxuryCarFactory();
        CarInterior luxuryCarInterior = luxuryCarFactory.createInterior();
        CarExterior luxuryCarExterior = luxuryCarFactory.createExterior();

        // Create a sports car factory
        CarFactory sportsCarFactory = new SportsCarFactory();
        CarInterior sportsCarInterior = sportsCarFactory.createInterior();
        CarExterior sportsCarExterior = sportsCarFactory.createExterior();

        // Use the products
        System.out.println("Economy Car:");
        economyCarInterior.addInteriorComponents();
        economyCarExterior.addExteriorComponents();

        System.out.println("\nSports Car:");
        sportsCarInterior.addInteriorComponents();
        sportsCarExterior.addExteriorComponents();

        System.out.println("\nLuxury Car:");
        luxuryCarInterior.addInteriorComponents();
        luxuryCarExterior.addExteriorComponents();
    }
}
