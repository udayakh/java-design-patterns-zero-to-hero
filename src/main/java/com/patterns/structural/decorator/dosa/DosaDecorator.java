package com.patterns.structural.decorator.dosa;

public abstract class DosaDecorator implements Dosa {
    private final Dosa dosa;

    public DosaDecorator(Dosa dosa) {
        this.dosa = dosa;
    }

    @Override
    public double getCost() {
        return dosa.getCost();
    }

    @Override
    public String getIngredients() {
        return dosa.getIngredients();
    }
}
