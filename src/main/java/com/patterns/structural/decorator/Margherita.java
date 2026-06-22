package com.patterns.structural.decorator;

public class Margherita implements Pizza {
    @Override
    public double getCost() {
        return 10.0;
    }

    @Override
    public String getIngredients() {
        return "Tomato Sauce, Mozzarella, Basil";
    }
}
