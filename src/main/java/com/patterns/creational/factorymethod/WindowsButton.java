package com.patterns.creational.factorymethod;

public class WindowsButton implements Button {

    @Override
    public void onClick() {
        // TODO Auto-generated method stub
        System.out.println("onclick method from WindowButton");    
    }

    @Override
    public void render() {
        // TODO Auto-generated method stub
    System.out.println("render method from WindowButton");    
    }
    
}
