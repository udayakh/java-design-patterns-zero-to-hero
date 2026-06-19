package com.patterns.solid.ocp;

public class DatabaseInvoiceDAO implements InvoiceDAO {

    @Override
    public void save(Invoice invoice) {
        // Imagine this is a real database save, with all the error handling and
        // transaction management that implies.
        System.out.println("Saving invoice " + invoice.getId() + " to the database.");
    }
    
}
