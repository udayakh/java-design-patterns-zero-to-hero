package com.patterns.solid.srp;

public class InvoiceDAO{

    // Reason to change #2: persistence
    public void saveInvoice(Invoice invoice) {
        // Code to save the invoice to a database or file would go here.
        System.out.println("Saving invoice for customer: " + invoice.getCustomer());
    }   

}
