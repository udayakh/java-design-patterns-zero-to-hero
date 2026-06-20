# Strategy — The Bad Approach

## Naive code (the problem)
Driving behavior is baked into the `Vehicle` hierarchy via overrides — and two
unrelated subclasses need the *same* behavior, so they copy-paste it:

```java
public class Vehicle {
    public void drive() { System.out.println("Normal drive."); }
}

public class SportsVehicle extends Vehicle {
    @Override public void drive() {
        System.out.println("Special drive: fast and powerful.");   // duplicated #1
    }
}

public class OffRoadVehicle extends Vehicle {
    @Override public void drive() {
        System.out.println("Special drive: fast and powerful.");   // duplicated #2 (identical)
    }
}
```

## Why it's bad
- **Code duplication** — the "special drive" logic lives in two places; change it
  once and you must remember every copy.
- **Tight coupling** — the algorithm is welded into the class hierarchy.
- **No runtime change** — an object's driving behavior is fixed by its class at
  creation; you can't switch it on a live object.

## The fix
Extract the behavior into a `DriveStrategy` interface with interchangeable
implementations; `Vehicle` holds a strategy field and delegates, and
`setDriveStrategy()` can swap it at runtime. See [`Vehicle.java`](Vehicle.java)
and [`UML.md`](UML.md).
