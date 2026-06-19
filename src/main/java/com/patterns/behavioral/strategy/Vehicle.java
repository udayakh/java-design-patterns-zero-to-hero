package com.patterns.behavioral.strategy;

public class Vehicle {

    private DriveStrategy driveStrategy;

    public Vehicle(DriveStrategy driveStrategy) {
        this.driveStrategy = driveStrategy;
    }

    public void drive() {
        driveStrategy.drive();
    }

    public void setDriveStrategy(DriveStrategy driveStrategy) {
    this.driveStrategy = driveStrategy;
}

}
