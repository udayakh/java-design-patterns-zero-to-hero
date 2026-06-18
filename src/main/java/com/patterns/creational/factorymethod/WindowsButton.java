package com.patterns.creational.factorymethod;

public class WindowsButton implements Button {

    @Override
    public void onClick() {
        System.out.println("onclick method from WindowButton");
    }

    @Override
    public void render() {
        System.out.println("render method from WindowButton");
    }

}
