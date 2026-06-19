package com.patterns.behavioral.strategy;

public class NormalDrive implements DriveStrategy {

    @Override
    public void drive() {
        System.out.println("Normal drive capability: standard performance.");
    }
    
}
