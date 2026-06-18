package com.patterns.solid.dip;

/**
 * BAD DESIGN — violates DIP.
 *
 * This high-level class (MacBook) depends DIRECTLY on low-level concretions:
 * it `new`s up a specific WiredKeyboard and WiredMouse. You can never give it a
 * Bluetooth keyboard without editing this class. High-level policy is welded to
 * low-level detail.
 */
public class MacBook {

    private final WiredKeyboard keyboard;
    private final WiredMouse mouse;

    public MacBook() {
        // hard-wired concretions — the core problem
        this.keyboard = new WiredKeyboard();
        this.mouse = new WiredMouse();
    }

    public void use() {
        System.out.println("Using a MacBook with:");
        keyboard.type();
        mouse.click();
    }
}
