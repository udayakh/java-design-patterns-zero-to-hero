# ISP — The Bad Approach

## Naive code (the problem)
One fat interface lumps every job together, forcing a `Waiter` to implement
methods it never uses — with empty bodies:

```java
public interface RestaurantEmployee {
    void washDishes();
    void serveCustomers();
    void cookFood();
    void doMaintenance();
}

public class Waiter implements RestaurantEmployee {
    @Override public void serveCustomers() { System.out.println("Serving."); }
    @Override public void washDishes()     { }   // forced, empty
    @Override public void cookFood()       { }   // a waiter does NOT cook
    @Override public void doMaintenance()  { }   // a waiter does NOT maintain
}
```

## Why it's bad
- Clients **depend on methods they don't use** — the empty/lying bodies are the
  smell.
- A change to the fat interface ripples to every implementer, even unrelated ones.

## The fix
Split into small, role-specific interfaces (`WaiterTask`, `ChefTask`,
`MaintenanceTask`); each class implements only the roles it needs, and a
multi-role class can compose several. See [`TASK.md`](TASK.md).
