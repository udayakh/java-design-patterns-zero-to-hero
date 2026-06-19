package com.patterns.solid.isp;

public class Manager implements WaiterTask, MaintenanceTask {
    @Override
    public void serveFood() {
        System.out.println("Manager is serving the food.");
    }

    @Override
    public void doMaintenance() {
        System.out.println("Manager is performing maintenance tasks.");
    }
}
