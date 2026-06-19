# Strategy — Behavioral Pattern

## Problem
`drive()` behavior is baked into the `Vehicle` hierarchy via overrides.
`SportsVehicle` and `OffRoadVehicle` need the SAME special behavior, so they
**duplicate** the override. The algorithm is **tightly coupled** to the class,
and behavior can't change at runtime.

## The pattern
Pull the varying behavior ("how it drives") out of the class and into its own
family of interchangeable objects:

1. **`DriveStrategy`** interface with a single method `drive()`.
2. Concrete strategies implementing it:
   - `NormalDrive` → prints the normal behavior
   - `SportsDrive` → prints the special behavior
   (Each algorithm lives in ONE place now — no duplication.)
3. **`Vehicle`** holds a `DriveStrategy` (a field), receives it via the
   **constructor** (injection — just like DIP / MacBook), and its `drive()`
   simply delegates: `driveStrategy.drive();`
4. Subclasses no longer override `drive()`. They pass the strategy they want
   up to `super(...)`:
   - `SportsVehicle extends Vehicle` → `super(new SportsDrive())`
   - `OffRoadVehicle extends Vehicle` → `super(new SportsDrive())`  (reuse, no copy!)
   - `PassengerVehicle extends Vehicle` → `super(new NormalDrive())`

## Done when
- No subclass overrides `drive()`.
- The "special drive" text exists in exactly ONE file (`SportsDrive`).
- A `StrategyDemo` builds the vehicles and calls `drive()` on each.

## Stretch (the part that makes it "Strategy", not just composition)
Add a setter `setDriveStrategy(DriveStrategy s)` on `Vehicle`, then in the demo
change a vehicle's behavior AT RUNTIME:
```java
Vehicle v = new PassengerVehicle();
v.drive();                         // normal
v.setDriveStrategy(new SportsDrive());
v.drive();                         // now special — same object, new behavior
```

## Connection
This is OCP + DIP from your SOLID work: `Vehicle` depends on the `DriveStrategy`
abstraction (DIP), and you add new behaviors by writing a new strategy class
with zero edits to existing ones (OCP). Same skeleton as Factory Method — the
difference is Factory Method swaps *what object you create*, Strategy swaps
*which algorithm you run*.
