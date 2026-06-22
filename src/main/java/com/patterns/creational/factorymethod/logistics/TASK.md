# Factory Method (Logistics) — Hands-On Task

## Problem
`DeliveryPlanner` builds transports by `new`-ing concrete classes directly,
branching on a `String`, and repeats that branch everywhere a transport is needed
(see [`BAD-APPROACH.md`](BAD-APPROACH.md)). Adding a new transport means editing
existing, working code.

## The pattern
Define an interface for creating a transport, but let **subclasses decide** which
concrete transport to instantiate. Creation is deferred to subclasses.

Build it all yourself in this package
(`com.patterns.creational.factorymethod.logistics`):

### 1. Product
- **`Transport`** interface with:
  - `void deliver();`
  - `int getCapacity();`   // kg

### 2. Concrete Products
- **`Truck implements Transport`** — `deliver()` prints "Delivering by road",
  capacity e.g. `5000`.
- **`Ship implements Transport`** — `deliver()` prints "Delivering by sea",
  capacity e.g. `100000`.

### 3. Creator (abstract)
- **`Logistics`** abstract class with:
  - the **factory method**: `public abstract Transport createTransport();`
  - a real workflow method that **uses** it (write this ONCE, against the
    `Transport` abstraction — it must never `new` a concrete transport):
    ```java
    public void planDelivery() {
        Transport t = createTransport();
        System.out.println("Loading " + t.getCapacity() + "kg");
        t.deliver();
    }
    ```

### 4. Concrete Creators
- **`RoadLogistics extends Logistics`** — `createTransport()` returns a `Truck`.
- **`SeaLogistics extends Logistics`** — `createTransport()` returns a `Ship`.

### 5. Client
- **`LogisticsDemo`** with a `main` — choose a `Logistics` (the only `if` left,
  or just pick one), hold it as a `Logistics` reference, and call
  `planDelivery()`. The client must never name `Truck` or `Ship`.

## Done when
- `planDelivery()` works only against the `Transport` interface — no concrete
  `new` inside it.
- The transport-selection decision lives in exactly ONE place (choosing the
  `Logistics`), not scattered around.
- Adding **air** delivery = new `Plane` + new `AirLogistics`, with ZERO edits to
  `Truck`, `Ship`, `RoadLogistics`, `SeaLogistics`, or `planDelivery()` (OCP).

## Stretch (only after the above runs)
- Add the `Plane` / `AirLogistics` pair and prove you changed nothing else.
- Map the four roles back to the button example you already studied:
  Creator = `Logistics` (≈ `Dialog`), Concrete Creator = `RoadLogistics`
  (≈ `WindowsDialog`), Product = `Transport` (≈ `Button`), Concrete Product =
  `Truck` (≈ `WindowsButton`).

## When you're done
Ping me and I'll review your code against the pattern (coupling, OCP, where the
`new` lives) — not just whether it compiles.
