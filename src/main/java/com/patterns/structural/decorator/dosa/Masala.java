package com.patterns.structural.decorator.dosa;

public class Masala extends DosaDecorator {
    public Masala(Dosa dosa) {
        super(dosa);
    }

    @Override
    public double getCost() {
        return super.getCost() + 10.0; // Adding cost of masala
    }

    @Override
    public String getIngredients() {
        return super.getIngredients() + ", Masala"; // Adding masala to ingredients
    }
    
}
