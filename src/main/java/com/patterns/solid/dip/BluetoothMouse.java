package com.patterns.solid.dip;

public class BluetoothMouse implements Mouse {
    @Override
    public void click() {
        System.out.println("Clicking with Bluetooth mouse.");
    }
}
