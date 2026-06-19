package com.patterns.creational.factorymethod;

public class FactoryMethodDemo {
    public static void main(String[] args) {
        Dialog dialog;
        String osName = System.getProperty("os.name").toLowerCase();
        if (osName.contains("mac")) {
            dialog = new MacDialog();
        } else {
            dialog = new WindowsDialog();
        }
        dialog.renderWindow();
    }   
}
