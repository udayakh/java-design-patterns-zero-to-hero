package com.patterns.solid.dip;

public class BluetoothKeyboard implements Keyboard {
    @Override
    public void type() {
        System.out.println("Typing with Bluetooth keyboard.");
    }
}
