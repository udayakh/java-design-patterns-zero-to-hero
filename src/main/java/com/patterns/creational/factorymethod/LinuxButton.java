package com.patterns.creational.factorymethod;

public class LinuxButton implements Button {

    @Override
    public void onClick() {
        System.out.println("onclick method from LinuxButton");
    }

    @Override
    public void render() {
        System.out.println("render method from LinuxButton");
    }
    
}
