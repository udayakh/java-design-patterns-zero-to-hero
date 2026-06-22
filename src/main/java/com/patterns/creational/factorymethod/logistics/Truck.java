package com.patterns.creational.factorymethod.logistics;

public class Truck implements Transport {

    @Override
    public void deliver() {
        System.out.println("Delivering by truck");
    }

    @Override
    public int getCapacity() {
        return 1000; // capacity in kg
    }
    
}
