package com.patterns.solid.lsp;

public class LspDemo {
    public static void main(String[] args) {
        Bike bike = new Bicycle();
        bike.accelerate();

        EnginePowered enginePoweredBike = new Motorcycle();
        enginePoweredBike.turnOnEngine();
    }
    
}
