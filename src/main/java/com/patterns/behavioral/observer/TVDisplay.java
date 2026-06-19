package com.patterns.behavioral.observer;

/** Another concrete display, also hard-wired into the station. */
public class TVDisplay implements Observer {

    @Override
    public void update(double temperature) {
        System.out.println("[TV] Temperature is now " + temperature + "°C");
    }
}
