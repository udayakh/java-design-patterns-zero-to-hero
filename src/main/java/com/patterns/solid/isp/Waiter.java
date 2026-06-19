package com.patterns.solid.isp;

public class Waiter implements WaiterTask {

    @Override
    public void serveFood() {
        System.out.println("Waiter is serving the food.");
    }

}
