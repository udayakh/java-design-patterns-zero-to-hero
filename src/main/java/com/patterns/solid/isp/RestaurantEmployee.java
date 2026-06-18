package com.patterns.solid.isp;

/**
 * BAD DESIGN — violates ISP.
 *
 * One fat interface lumps together every job in the restaurant. A Waiter is
 * forced to implement cookFood() and doMaintenance() even though those are not
 * a waiter's job (see Waiter.java) — so the waiter implements them with empty
 * or throwing bodies. Clients depend on methods they don't use.
 */
public interface RestaurantEmployee {

    void washDishes();

    void serveCustomers();

    void cookFood();

    void doMaintenance();
}
