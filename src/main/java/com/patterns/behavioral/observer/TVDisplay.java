package com.patterns.behavioral.observer;

/** Another concrete display, also hard-wired into the station. */
public class TVDisplay {

    public void show(double temperature) {
        System.out.println("[TV] Temperature is now " + temperature + "°C");
    }
}
