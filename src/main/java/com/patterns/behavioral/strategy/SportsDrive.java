package com.patterns.behavioral.strategy;

public  class SportsDrive implements DriveStrategy {

    @Override
    public void drive() {
        System.out.println("Special drive capability: fast and powerful.");
    }
    
}
