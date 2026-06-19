package com.patterns.solid.ocp;

public class FileInvoiceDAO implements InvoiceDAO {

    @Override
    public void save(Invoice invoice) {
        // Imagine this is a real file save, with all the error handling and
        // file management that implies.
        System.out.println("Saving invoice " + invoice.getId() + " to a file.");
    }
    
}
