package com.patterns.creational.simplefactory;

public enum PushNotification implements Notification {
    INSTANCE;

    @Override
    public void send() {
        System.out.println("Sending Push Notification");
    }
}
