package com.patterns.behavioral.observer;

/** A concrete display the station currently calls directly. */
public class PhoneDisplay {

    public void show(double temperature) {
        System.out.println("[Phone] Temperature is now " + temperature + "°C");
    }
}
