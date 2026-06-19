package com.patterns.solid.dip;

public class WiredMouse implements Mouse {

    @Override
    public void click() {
        System.out.println("  clicking a wired mouse");
    }
}
