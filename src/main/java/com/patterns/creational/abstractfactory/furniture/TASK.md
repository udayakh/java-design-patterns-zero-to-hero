# Abstract Factory (Furniture) — Hands-On Task

## Problem
`FurnitureOrder` builds furniture by `new`-ing concrete products directly,
branching on a `String`, and nothing stops it pairing a `VictorianChair` with a
`ModernSofa` — an inconsistent set (see [`BAD-APPROACH.md`](BAD-APPROACH.md)).
There's no guarantee the pieces come from the *same style family*.

## The pattern
Provide a "factory of factories": each concrete factory produces a whole,
*consistent* family of related products. The client holds the abstract factory
and never names a concrete product.

Build it all yourself in this package
(`com.patterns.creational.abstractfactory.furniture`):

### 1. Product interfaces (the abstract products)
- **`Chair`** — `void sitOn();`
- **`Sofa`**  — `void lieOn();`

### 2. Concrete Products (two families)
- Modern: **`ModernChair implements Chair`**, **`ModernSofa implements Sofa`**
- Victorian: **`VictorianChair implements Chair`**, **`VictorianSofa implements Sofa`**
- Each `sitOn()` / `lieOn()` just prints what it is, e.g. "Sitting on a modern chair".

### 3. The Abstract Factory
- **`FurnitureFactory`** interface with BOTH factory methods:
  ```java
  Chair createChair();
  Sofa  createSofa();
  ```

### 4. Concrete Factories (one per family)
- **`ModernFurnitureFactory implements FurnitureFactory`** — returns
  `ModernChair` + `ModernSofa`.
- **`VictorianFurnitureFactory implements FurnitureFactory`** — returns
  `VictorianChair` + `VictorianSofa`.
- Because a single factory only ever returns one style, the
  Victorian-chair-+-Modern-sofa mismatch becomes **impossible to write**.

### 5. Client
- **`FurnitureDemo`** with a `main` — pick a `FurnitureFactory` (the only place a
  concrete factory is named), hold it as a `FurnitureFactory` reference, build a
  chair and a sofa from it, and use them. The client must never name
  `ModernChair`, `VictorianSofa`, etc.

## Done when
- A single factory produces only same-style products; mixing styles is no longer
  possible to express.
- The client depends only on `FurnitureFactory`, `Chair`, `Sofa` — never on a
  concrete product.
- Adding an `ArtDeco` style = new products + one new `ArtDecoFurnitureFactory`,
  with ZERO edits to existing factories, products, or the client (OCP).

## Stretch (only after the above runs)
- Add a `default void furnishRoom()` on `FurnitureFactory` that calls both
  factory methods and uses the pieces — a template the client can just call.
- Add a `FurnitureStyle` enum (`MODERN`, `VICTORIAN`) + a `FurnitureFactoryProvider`
  whose `getFactory(style)` returns the right factory — pushing the one "which
  family" decision into a single place (same role `CarFactoryProvider` plays).

## Factory Method vs Abstract Factory (lock this in)
- **Factory Method:** ONE product, variant chosen by a subclass (one
  `createTransport()` / `createButton()`).
- **Abstract Factory:** MANY product types grouped into families that must agree
  (`createChair()` AND `createSofa()` from the same factory). It's literally
  several factory methods bundled so the products stay compatible.

## When you're done
Ping me and I'll review your code — especially whether the family guarantee
actually holds and where the one concrete-factory choice lives.
