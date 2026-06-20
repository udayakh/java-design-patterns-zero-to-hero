# OCP — The Bad Approach

## Naive code (the problem)
Storage handling switches on a type string, so a new target means editing this
working method:

```java
public class InvoiceDAO {
    public void saveInvoice(Invoice invoice, String storageType) {
        if (storageType.equals("DB")) {
            System.out.println("Saving to the database");
        } else if (storageType.equals("FILE")) {
            System.out.println("Saving to a file");
        } else {
            throw new IllegalArgumentException("Unknown: " + storageType);
        }
    }
}
```

## Why it's bad
- **Open-Closed violation** — adding "cloud" means adding another `else if`,
  modifying code that already works and risking the existing branches.
- The class is not closed for modification: every new requirement edits it.

## The fix
Make `InvoiceDAO` an interface with `save(Invoice)`, and add one implementation
per target (`DatabaseInvoiceDAO`, `FileInvoiceDAO`, …). A new target is a new
file with **zero** edits to existing code. See [`TASK.md`](TASK.md).
