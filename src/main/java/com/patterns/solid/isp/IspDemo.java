package com.patterns.solid.isp;

public class IspDemo {
    public static void main(String[] args) {
        WaiterTask waiter = new Waiter();
        ChefTask chef = new Chef();
        MaintenanceTask janitor = new Maintenance();
        waiter.serveFood();
        chef.prepareFood();
        janitor.doMaintenance();

        Manager manager = new Manager();
        manager.serveFood();
        manager.doMaintenance();
    }
}
