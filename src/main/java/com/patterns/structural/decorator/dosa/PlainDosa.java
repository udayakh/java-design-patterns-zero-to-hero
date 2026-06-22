package com.patterns.structural.decorator.dosa;

public class PlainDosa implements Dosa {
    @Override
    public double getCost() {
        return 30.0; // Cost of plain dosa
    }

    @Override
    public String getIngredients() {
        return "Plain Dosa"; // Ingredients of plain dosa
    }
    
}
