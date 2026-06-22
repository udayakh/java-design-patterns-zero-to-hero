package com.patterns.structural.decorator.dosa;

public class Ghee extends DosaDecorator {
    public Ghee(Dosa dosa) {
        super(dosa);
    }

    @Override
    public double getCost() {
        return super.getCost() + 5.0; // Adding cost of ghee
    }

    @Override
    public String getIngredients() {
        return super.getIngredients() + ", Ghee"; // Adding ghee to ingredients
    }
    
}
