package com.patterns.solid.dip;

public class WiredKeyboard implements Keyboard {
    @Override
    public void type() {
        System.out.println("  typing on a wired keyboard");
    }
}
