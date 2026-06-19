package com.patterns.solid.ocp;

public class OcpDemo {
    public static void main(String[] args) {
        Invoice invoice = new Invoice(42);
        InvoiceDAO dao = new FileInvoiceDAO();   // note the TYPE is the interface
        dao.save(invoice);
        // try swapping to new DatabaseInvoiceDAO() — same line works
        dao = new DatabaseInvoiceDAO();
        dao.save(invoice);
        // try swapping to new CloudInvoiceDAO() — same line works
        dao = new CloudInvoiceDAO();
        dao.save(invoice);
    }
}
