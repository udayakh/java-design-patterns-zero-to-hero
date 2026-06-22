package com.patterns.creational.prototype;

public class Triangle implements Shape {
    private int base;
    private int height;

    public Triangle(int base, int height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public Shape clone() {
        return new Triangle(base, height);
    }

    @Override
    public void render() {
        System.out.println("Rendering a triangle with base " + base + " and height " + height);
    }
    
}
