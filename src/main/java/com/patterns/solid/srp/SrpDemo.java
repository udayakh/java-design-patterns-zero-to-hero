package com.patterns.solid.srp;

public class SrpDemo {
    public static void main(String[] args) {
        // 1. build ONE invoice
        // 2. hand it to a new InvoicePrinter().printInvoice(...)
        // 3. hand the SAME invoice to a new InvoiceDAO().saveInvoice(...)

        Invoice invoice = new Invoice("Acme, Inc.", 10, 9.99, 0.07);
        invoice.calculateTotal();
        InvoicePrinter printer = new InvoicePrinter();
        printer.printInvoice(invoice);
        InvoiceDAO dao = new InvoiceDAO();
        dao.saveInvoice(invoice);
    }
}

