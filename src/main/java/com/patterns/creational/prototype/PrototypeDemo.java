package com.patterns.creational.prototype;

public class PrototypeDemo {
    public static void main(String[] args) {
        // --- 1. Cloning is polymorphic: the client copies via the Shape
        //         abstraction and never needs to know the concrete type. ---
        Shape rectangle1 = new Rectangle(4, 6);
        Shape rectangle2 = rectangle1.clone();   // no instanceof, no cast to clone
        Shape triangle1 = new Triangle(3, 4);
        Shape triangle2 = triangle1.clone();
        rectangle1.render();
        rectangle2.render();
        triangle1.render();
        triangle2.render();

        System.out.println("----");

        // --- 2. Prove a clone is INDEPENDENT (primitive + mutable field). ---
        // We type these as Circle because we call Circle-specific mutators
        // (setRadius/addTag). The clone() call itself is still type-agnostic;
        // knowing the concrete type is only needed to mutate concrete state.
        Circle original = new Circle(5);
        original.addTag("favorite");

        Circle copy = (Circle) original.clone();
        copy.setRadius(99);          // mutate the clone's primitive
        copy.addTag("temporary");    // mutate the clone's LIST

        original.render();  // radius 5,  tags [favorite]            <- untouched
        copy.render();      // radius 99, tags [favorite, temporary] <- changed
        // The original keeps radius 5 AND tags [favorite]. If clone() had done a
        // SHALLOW copy of tags, the original would wrongly read
        // [favorite, temporary] here — that's the bug deep-copy prevents.
    }
}
