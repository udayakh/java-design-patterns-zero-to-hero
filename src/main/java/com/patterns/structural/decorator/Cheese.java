package com.patterns.structural.decorator;

public class Cheese extends ToppingDecorator {
    public Cheese(Pizza pizza) {
        super(pizza);
    }

    @Override
    public double getCost() {
        return pizza.getCost() + 2.0;
    }

    @Override
    public String getIngredients() {
        return pizza.getIngredients() + ", Extra Cheese";
    }
}
