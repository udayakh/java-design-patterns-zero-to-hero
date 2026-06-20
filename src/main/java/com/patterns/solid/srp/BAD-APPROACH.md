# SRP — The Bad Approach

## Naive code (the problem)
One `Invoice` class that does three unrelated jobs:

```java
public class Invoice {
    private final String customer;
    private final int quantity;
    private final double pricePerUnit;
    private final double taxRate;

    // Reason to change #1: business rules
    public double calculateTotal() {
        double subtotal = quantity * pricePerUnit;
        return subtotal + (subtotal * taxRate);
    }

    // Reason to change #2: persistence
    public void saveToDatabase() {
        System.out.println("Saving invoice to the database...");
    }

    // Reason to change #3: presentation
    public void printInvoice() {
        System.out.println("===== INVOICE ===== ...");
    }
}
```

## Why it's bad
- **Three reasons to change** in one class — a DB change, a print-format change,
  or a tax-rule change all force edits here.
- Changes to one concern risk breaking the others (no isolation).
- Hard to test or reuse any single concern on its own.

## The fix
Split by responsibility: `Invoice` (data + `calculateTotal`), `InvoiceDAO`
(persistence), `InvoicePrinter` (presentation) — the operators receive an
`Invoice` via composition, not inheritance. See [`TASK.md`](TASK.md).
