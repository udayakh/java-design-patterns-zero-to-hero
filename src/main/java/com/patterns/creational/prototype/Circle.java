package com.patterns.creational.prototype;

import java.util.ArrayList;
import java.util.List;

public class Circle implements Shape {
    private int radius;
    // A MUTABLE REFERENCE field — this is what makes cloning subtle.
    // A primitive (radius) is copied by value automatically; a List is a
    // reference, so a careless clone() would copy the *pointer*, leaving the
    // clone and the original sharing ONE list.
    private List<String> tags;

    public Circle(int radius) {
        this.radius = radius;
        this.tags = new ArrayList<>();
    }

    // Copy constructor — the single place that defines "how to copy a Circle".
    // clone() just delegates here. This is where deep vs shallow is decided.
    private Circle(Circle source) {
        this.radius = source.radius;                  // primitive: plain assignment is a real copy
        // DEEP copy: build a NEW list with the same contents, instead of
        // `this.tags = source.tags;` (that would share the same list object).
        this.tags = new ArrayList<>(source.tags);
        //
        // SHALLOW (the bug) would be:
        //     this.tags = source.tags;
        // Then clone.addTag(...) would also mutate the original's tags.
    }

    @Override
    public Shape clone() {
        return new Circle(this);
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public void addTag(String tag) {
        this.tags.add(tag);
    }

    @Override
    public void render() {
        System.out.println("Rendering a circle with radius: " + radius + ", tags: " + tags);
    }

}
