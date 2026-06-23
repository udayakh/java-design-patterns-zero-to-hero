package com.patterns.creational.simplefactory;

public enum SmsNotification implements Notification {
    INSTANCE;

    @Override
    public void send() {
        System.out.println("Sending SMS Notification");
    }
}
