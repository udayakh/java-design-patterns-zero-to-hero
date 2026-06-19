package com.patterns.solid.dip;

public class DipDemo {
    public static void main(String[] args) {
        // Using a Bluetooth keyboard and mouse
        Keyboard bluetoothKeyboard = new BluetoothKeyboard();
        Mouse bluetoothMouse = new BluetoothMouse();

        bluetoothKeyboard.type();
        bluetoothMouse.click();

        // Using a Wired keyboard and mouse
        Keyboard wiredKeyboard = new WiredKeyboard();
        Mouse wiredMouse = new WiredMouse();
        wiredKeyboard.type();
        wiredMouse.click();

        MacBook macBook = new MacBook(wiredKeyboard, wiredMouse);
        macBook.use();

        MacBook macBook2 = new MacBook(bluetoothKeyboard, bluetoothMouse);
        macBook2.use();
    }
}
