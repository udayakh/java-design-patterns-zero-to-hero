package com.patterns.solid.srp;

public class InvoicePrinter {

    // Reason to change #3: presentation
    public void printInvoice(Invoice invoice) {
        System.out.println("Invoice for customer: " + invoice.getCustomer());
        System.out.println("Total amount: " + invoice.calculateTotal());
    }
    
}
