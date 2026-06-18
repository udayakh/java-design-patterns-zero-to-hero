package com.patterns.solid.isp;

/**
 * BAD DESIGN — the ISP violation made concrete.
 *
 * The waiter only serves customers (and maybe clears dishes), but the fat
 * interface forces empty / meaningless implementations of cookFood() and
 * doMaintenance(). Dead, lying methods.
 */
public class Waiter implements RestaurantEmployee {

    @Override
    public void washDishes() {
        // not really the waiter's job, but forced to implement
    }

    @Override
    public void serveCustomers() {
        System.out.println("Waiter is serving the customers.");
    }

    @Override
    public void cookFood() {
        // a waiter does NOT cook — forced empty body
    }

    @Override
    public void doMaintenance() {
        // a waiter does NOT do maintenance — forced empty body
    }
}
