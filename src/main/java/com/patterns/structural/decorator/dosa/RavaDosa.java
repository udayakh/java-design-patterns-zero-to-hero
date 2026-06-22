package com.patterns.structural.decorator.dosa;

public class RavaDosa implements Dosa {
    @Override
    public double getCost() {
        return 40.0; // Cost of rava dosa
    }

    @Override
    public String getIngredients() {
        return "Rava Dosa"; // Ingredients of rava dosa
    }
    
}
