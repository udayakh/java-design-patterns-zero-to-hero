package com.patterns.solid.srp;

/**
 * BAD DESIGN — violates SRP.
 *
 * This one class has THREE reasons to change:
 *   1. The rules for calculating the invoice total (business logic).
 *   2. How invoices are stored (persistence).
 *   3. How invoices are printed (presentation).
 *
 * A change to the database, the printer format, OR the tax math all force
 * edits to this same file.
 */
public class Invoice {

    private final String customer;
    private final int quantity;
    private final double pricePerUnit;
    private final double taxRate;

    public Invoice(String customer, int quantity, double pricePerUnit, double taxRate) {
        this.customer = customer;
        this.quantity = quantity;
        this.pricePerUnit = pricePerUnit;
        this.taxRate = taxRate;
    }

    public String getCustomer() {
        return customer;
    }

    public double calculateTotal() {
        double subtotal = quantity * pricePerUnit;
        double tax = subtotal * taxRate;
        return subtotal + tax;
    }
}
