package com.patterns.structural.decorator;

public class Farmhouse implements Pizza {
    @Override
    public double getCost() {
        return 12.0;
    }

    @Override
    public String getIngredients() {
        return "Tomato Sauce, Mozzarella, Mushrooms, Green Peppers";
    }
}
