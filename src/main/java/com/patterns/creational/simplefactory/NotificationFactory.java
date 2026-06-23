package com.patterns.creational.simplefactory;

public class NotificationFactory {
    public static Notification createNotification(String type) {
        if (type == null || type.isEmpty())
            throw new IllegalArgumentException("Notification type cannot be null or empty");
        if ("SMS".equalsIgnoreCase(type)) {
            return SmsNotification.INSTANCE;
        } else if ("EMAIL".equalsIgnoreCase(type)) {
            return EmailNotification.INSTANCE;
        } else if ("PUSH".equalsIgnoreCase(type)) {
            return PushNotification.INSTANCE;
        }
        throw new IllegalArgumentException("Unknown notification type: " + type);
    }
}
