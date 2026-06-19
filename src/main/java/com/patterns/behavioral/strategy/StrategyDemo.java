package com.patterns.behavioral.strategy;

public class StrategyDemo {
    public static void main(String[] args) {
        Vehicle sportsVehicle = new SportsVehicle(new SportsDrive());
        Vehicle offRoadVehicle = new OffRoadVehicle(new OffRoadDrive());
        Vehicle normalVehicle = new Vehicle(new NormalDrive());

        System.out.println("Sports Vehicle:");
        sportsVehicle.drive();

        System.out.println("\nOff-Road Vehicle:");
        offRoadVehicle.drive();

        System.out.println("\nNormal Vehicle:");
        normalVehicle.drive();


        Vehicle car = new PassengerVehicle(new NormalDrive());
        car.drive();                              // normal
        car.setDriveStrategy(new SportsDrive());
        car.drive();                              // SAME car, now fast

    }
}
