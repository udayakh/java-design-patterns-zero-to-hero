package com.patterns.creational.simplefactory;

public enum EmailNotification implements Notification {
    INSTANCE;

    @Override
    public void send() {
        System.out.println("Sending Email Notification");
    }
    
}
