package com.patterns.creational.simplefactory;

public class SimpleFactoryDemo {
    public static void main(String[] args) {
        Notification pushNotification = NotificationFactory.createNotification("PUSH");
        pushNotification.send();

        Notification smsNotification = NotificationFactory.createNotification("SMS");
        smsNotification.send();

        Notification emailNotification = NotificationFactory.createNotification("EMAIL");
        emailNotification.send();
    }
}
