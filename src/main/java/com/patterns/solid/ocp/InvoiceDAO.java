package com.patterns.solid.ocp;

/**
 * BAD DESIGN — violates OCP.
 *
 * Every time we support a NEW storage target, we must crack open this class
 * and edit the if/else. The class is not "closed for modification": a new
 * requirement = a code change in existing, working logic.
 *
 * Imagine next month: "also support saving to the cloud". You'd add another
 * branch here, risking the branches that already work.
 */
public class InvoiceDAO {

    public void saveInvoice(Invoice invoice, String storageType) {
        if (storageType.equals("DB")) {
            System.out.println("Saving invoice " + invoice.getId() + " to the database");
        } else if (storageType.equals("FILE")) {
            System.out.println("Saving invoice " + invoice.getId() + " to a file");
        } else {
            throw new IllegalArgumentException("Unknown storage type: " + storageType);
        }
    }
}
