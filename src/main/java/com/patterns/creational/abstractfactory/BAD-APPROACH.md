# Abstract Factory — The Bad Approach

## Naive code (the problem)
The client builds a car by `new`-ing concrete products directly — and nothing
stops it mixing two different families:

```java
// Build an "economy" car by hand...
CarInterior interior = new EconomyCarInterior();
CarExterior exterior = new LuxuryCarExterior();   // OOPS — luxury exterior!

interior.addInteriorComponents();
exterior.addExteriorComponents();
// Result: a Frankenstein car — economy interior + luxury exterior.
// The type system allowed it; both are just CarInterior / CarExterior.
```

## Why it's bad
- **No family guarantee** — nothing enforces that interior and exterior come
  from the *same* family, so invalid combinations slip through.
- **Tight coupling** — the client names every concrete product.
- **Open-Closed violation** — adding a Sports family means editing every place
  that assembles a car.

## The fix
A `CarFactory` whose `createInterior()` + `createExterior()` always return the
same family; each concrete factory (`EconomyCarFactory`, `LuxuryCarFactory`, …)
yields one consistent family, so the mismatch becomes impossible to express. See
[`CarFactory.java`](CarFactory.java) and [`UML.md`](UML.md).
