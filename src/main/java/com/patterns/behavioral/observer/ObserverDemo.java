package com.patterns.behavioral.observer;

public class ObserverDemo {
    public static void main(String[] args) {
       WeatherStation station = new WeatherStation();
Observer phone = new PhoneDisplay();
Observer tv = new TVDisplay();
station.addObserver(phone);
station.addObserver(tv);
station.setTemperature(25.0);     // BOTH react

station.removeObserver(phone);
station.setTemperature(30.0);     // only TV reacts
    }
}
