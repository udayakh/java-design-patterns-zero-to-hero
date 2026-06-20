# Abstract Factory — Creational Pattern

## Problem
`BadCarDemo` builds cars by `new`-ing concrete products directly, and nothing
stops it mixing an **Economy interior** with a **Luxury exterior** — an invalid
car. There's no guarantee that the products come from the *same family*.

## The pattern
Provide a "factory of factories": each concrete factory produces a whole,
*consistent* family of related products.

You already have the **products** (given): `CarInterior`/`CarExterior` interfaces
and the Economy/Luxury concrete classes. Build the **factory layer**:

1. **`CarFactory`** interface (the Abstract Factory) with two factory methods:
   - `CarInterior createInterior();`
   - `CarExterior createExterior();`
2. **`EconomyCarFactory implements CarFactory`** — returns `EconomyCarInterior` + `EconomyCarExterior`.
3. **`LuxuryCarFactory implements CarFactory`** — returns `LuxuryCarInterior` + `LuxuryCarExterior`.
   - Now a single factory only ever yields one consistent family — the mismatch
     from `BadCarDemo` becomes *impossible to express*.
4. **`AbstractFactoryDemo`** — pick a `CarFactory`, then build a complete car from
   it. The client holds a `CarFactory` (abstraction) and never names a concrete product.

## Optional (matches the video)
- A `CarType` enum (`ECONOMY`, `LUXURY`) + a `CarFactoryProvider` whose
  `getFactory(CarType)` returns the right factory. This pushes the one "which
  family" decision to a single place.
- A `default void produceCompleteVehicle()` on `CarFactory` that calls both
  factory methods and assembles the car — a template the client can just call.

## Done when
- A factory produces only same-family products; mixing families is no longer possible.
- Adding a `Sports` family = new products + one new `SportsCarFactory`, with ZERO
  edits to existing factories or the client (OCP).
- `AbstractFactoryDemo` builds an economy car and a luxury car, each consistent.

## Factory Method vs Abstract Factory (lock this in)
- **Factory Method:** one product, many variants (one `createButton()`).
- **Abstract Factory:** many product types grouped into families (an object with
  `createInterior()` AND `createExterior()` that must agree). It's literally
  several factory methods bundled so the products stay compatible.
