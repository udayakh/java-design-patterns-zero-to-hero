package com.patterns.structural.decorator.dosa;

public class DosaDemo {
    public static void main(String[] args) {
        Dosa plainDosa = new PlainDosa();
        System.out.println("Plain Dosa Cost: " + plainDosa.getCost());
        System.out.println("Plain Dosa Ingredients: " + plainDosa.getIngredients());

        Dosa ravaDosa = new RavaDosa();
        System.out.println("Rava Dosa Cost: " + ravaDosa.getCost());
        System.out.println("Rava Dosa Ingredients: " + ravaDosa.getIngredients());  

        Dosa masalaDosa = new Masala(new PlainDosa());
        System.out.println("Masala Dosa Cost: " + masalaDosa.getCost());
        System.out.println("Masala Dosa Ingredients: " + masalaDosa.getIngredients());

        Dosa cheeseMasalaDosa = new Cheese(new Masala(new PlainDosa()));
        System.out.println("Cheese Masala Dosa Cost: " + cheeseMasalaDosa.getCost());
        System.out.println("Cheese Masala Dosa Ingredients: " + cheeseMasalaDosa.getIngredients()); 

        Dosa ravaMasalaDosa = new Masala(new RavaDosa());
        System.out.println("Rava Masala Dosa Cost: " + ravaMasalaDosa.getCost());
        System.out.println("Rava Masala Dosa Ingredients: " + ravaMasalaDosa.getIngredients());}
}
