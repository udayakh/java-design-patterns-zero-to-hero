package com.patterns.behavioral.strategy;

public class OffRoadDrive implements DriveStrategy {

    @Override
    public void drive() {
        System.out.println("Driving off-road with enhanced traction and suspension.");
    }
    
}
