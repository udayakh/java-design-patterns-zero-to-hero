package com.patterns.solid.ocp;

public class CloudInvoiceDAO implements InvoiceDAO {

    @Override
    public void save(Invoice invoice) {
        // Imagine this is a real cloud save, with all the error handling and
        // cloud management that implies.
        System.out.println("Saving invoice " + invoice.getId() + " to the cloud.");
    }
    
}
