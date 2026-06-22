package com.patterns.creational.factorymethod.logistics;

public class Ship implements Transport {

    @Override
    public void deliver() {
        System.out.println("Delivering by ship.");
    }

    @Override
    public int getCapacity() {
        return 1000; // Example capacity in tons
    }
    
}
