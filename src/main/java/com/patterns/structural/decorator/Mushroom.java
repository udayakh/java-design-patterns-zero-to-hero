package com.patterns.structural.decorator;

public class Mushroom extends ToppingDecorator {
    public Mushroom(Pizza pizza) {
        super(pizza);
    }

    @Override
    public double getCost() {
        return pizza.getCost() + 1.5;
    }

    @Override
    public String getIngredients() {
        return pizza.getIngredients() + ", Mushrooms";
    }
    
}
