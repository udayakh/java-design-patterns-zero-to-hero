package com.patterns.structural.decorator.dosa;

public class Cheese extends DosaDecorator {
    public Cheese(Dosa dosa) {
        super(dosa);
    }

    @Override
    public double getCost() {
        return super.getCost() + 15.0; // Adding cost of cheese
    }

    @Override
    public String getIngredients() {
        return super.getIngredients() + ", Cheese"; // Adding cheese to ingredients
    }
    
}
