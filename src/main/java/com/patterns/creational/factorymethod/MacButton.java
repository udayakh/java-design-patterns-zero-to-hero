package com.patterns.creational.factorymethod;

public class MacButton implements Button {

    @Override
    public void onClick() {
        System.out.println("onclick method from MacButton");
    }

    @Override
    public void render() {
        System.out.println("render method from MacButton");
    }
    
}
