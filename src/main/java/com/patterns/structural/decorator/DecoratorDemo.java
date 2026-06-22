package com.patterns.structural.decorator;

public class DecoratorDemo {
    public static void main(String[] args) {
        Pizza margherita = new Margherita();
        System.out.println("Margherita Cost: $" + margherita.getCost());
        System.out.println("Margherita Ingredients: " + margherita.getIngredients());

        Pizza farmhouse = new Farmhouse();
        System.out.println("\nFarmhouse Cost: $" + farmhouse.getCost());
        System.out.println("Farmhouse Ingredients: " + farmhouse.getIngredients());

        // Adding toppings using decorators
        Pizza mushroomPizza = new Mushroom(margherita);
        System.out.println("\nMushroom Margherita Cost: $" + mushroomPizza.getCost());
        System.out.println("Mushroom Margherita Ingredients: " + mushroomPizza.getIngredients());

        Pizza cheeseMushroomPizza = new Cheese(mushroomPizza);
        System.out.println("\nCheese & Mushroom Margherita Cost: $" + cheeseMushroomPizza.getCost());
        System.out.println("Cheese & Mushroom Margherita Ingredients: " + cheeseMushroomPizza.getIngredients());
    }
}
