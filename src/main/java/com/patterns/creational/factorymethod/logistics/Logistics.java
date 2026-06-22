package com.patterns.creational.factorymethod.logistics;

public abstract class Logistics {
    public abstract Transport createTransport();    

    public void planDelivery() {
        Transport transport = createTransport();
        transport.deliver();
        System.out.println("Transport capacity: " + transport.getCapacity() + " tons");
    }
}
