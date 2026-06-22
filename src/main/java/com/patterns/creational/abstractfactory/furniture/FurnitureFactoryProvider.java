package com.patterns.creational.abstractfactory.furniture;

public class FurnitureFactoryProvider {
    public static void main(String[] args) {
        FurnitureFactory modernFactory = getFurnitureFactory(FurnitureStyle.MODERN);
        Chair modernChair = modernFactory.createChair();
        Sofa modernSofa = modernFactory.createSofa();
        modernChair.sitOn();
        modernSofa.lieOn();

        FurnitureFactory victorianFactory = getFurnitureFactory(FurnitureStyle.VICTORIAN);
        Chair victorianChair = victorianFactory.createChair();
        Sofa victorianSofa = victorianFactory.createSofa();
        victorianChair.sitOn();
        victorianSofa.lieOn();
    }
    public static FurnitureFactory getFurnitureFactory(FurnitureStyle style) {
        switch (style) {
            case MODERN:
                return new ModernFurnitureFactory();
            case VICTORIAN:
                return new VictorianFurnitureFactory();
            default:
                throw new IllegalArgumentException("Unknown furniture style: " + style);
        }
    }    
}
