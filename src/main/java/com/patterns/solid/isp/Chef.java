package com.patterns.solid.isp;

public class Chef implements ChefTask{
    
    @Override
    public void prepareFood() {
        System.out.println("Chef is preparing food.");
    }
}
