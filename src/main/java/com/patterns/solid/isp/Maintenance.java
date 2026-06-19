package com.patterns.solid.isp;

public class Maintenance implements MaintenanceTask {
    
    @Override
    public void doMaintenance() {
        System.out.println("Performing maintenance tasks.");
    }
    
}
