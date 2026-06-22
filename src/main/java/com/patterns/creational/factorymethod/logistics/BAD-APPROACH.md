# Factory Method (Logistics) — The Bad Approach

## Scenario
A logistics company plans deliveries. Right now it only does **road** delivery
(by `Truck`). The planning code creates trucks directly and runs the delivery
workflow around them.

## Naive code (the problem)
```java
public class DeliveryPlanner {

    public void planDelivery(String shipBy) {
        // creation + workflow are tangled together, branching on a String
        if (shipBy.equals("road")) {
            Truck truck = new Truck();
            System.out.println("Loading " + truck.getCapacity() + "kg");
            truck.deliver();
        } else if (shipBy.equals("sea")) {
            Ship ship = new Ship();
            System.out.println("Loading " + ship.getCapacity() + "kg");
            ship.deliver();
        }
        // ...and this same if/else gets copy-pasted everywhere a transport is needed
    }
}
```

## Why it's bad
- **Tight coupling** — `DeliveryPlanner` names every concrete transport (`Truck`,
  `Ship`) and `new`s them itself.
- **Open-Closed violation** — adding **air** delivery (`Plane`) means editing this
  `if/else` (and every copy of it), risking the branches that already work.
- **Duplication** — the "which transport + load it + deliver" logic is repeated
  in every place that ships something.

## The fix
Move creation behind an abstract `createTransport()` (the factory method) on a
`Logistics` creator; subclasses decide the concrete transport. The reusable
`planDelivery()` then works only against the `Transport` interface.
See [`TASK.md`](TASK.md).
