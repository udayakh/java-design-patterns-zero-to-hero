package com.patterns.solid.dip;

public class MacBook {

    private final Keyboard keyboard;
    private final Mouse mouse;

    public MacBook(Keyboard keyboard, Mouse mouse) {
        this.keyboard = keyboard;
        this.mouse = mouse;
    }

    public void use() {
        System.out.println("Using a MacBook with:");
        keyboard.type();
        mouse.click();
    }

}
