package com.patterns.behavioral.observer;

/**
 * BAD DESIGN — sets up the problem Observer solves.
 *
 * The WeatherStation (the publisher) is hard-wired to specific display devices.
 * When the temperature changes it calls each display BY HAND. Consequences:
 *
 *   - Tight coupling: the station knows the concrete PhoneDisplay / TVDisplay types.
 *   - OCP violation: adding a new display (e.g. a web widget) means EDITING this
 *     class and adding another line to setTemperature().
 *   - No runtime subscribe/unsubscribe: you can't add or drop a listener without
 *     changing code here.
 */
public class WeatherStation {

    private double temperature;

    // hard-wired dependents — the core problem
    private final PhoneDisplay phoneDisplay = new PhoneDisplay();
    private final TVDisplay tvDisplay = new TVDisplay();

    public void setTemperature(double temperature) {
        this.temperature = temperature;
        // must notify each known display manually; new display => new line here
        phoneDisplay.show(temperature);
        tvDisplay.show(temperature);
    }
}
