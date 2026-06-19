package com.patterns.behavioral.strategy;

public class OffRoadVehicle extends Vehicle {

    public OffRoadVehicle(DriveStrategy driveStrategy) {
        super(driveStrategy);
    }
}
