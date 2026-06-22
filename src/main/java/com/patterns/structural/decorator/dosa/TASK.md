# Decorator (Dosa) — Hands-On Task

## Problem
Modeling every dosa + extras combination as its own class causes "class
explosion"; the boolean-flag version forces an edit to `getPrice()` for every new
extra and gives no runtime flexibility (see [`BAD-APPROACH.md`](BAD-APPROACH.md)).

## The pattern
Wrap a dosa in a decorator that **adds behavior** and is **the same type** as what
it wraps, so extras can be stacked at runtime.

Build it all yourself in this package
(`com.patterns.structural.decorator.dosa`):

### 1. Component (the common type)
- **`Dosa`** interface:
  ```java
  String getDescription();
  double getPrice();
  ```

### 2. Concrete Components (the base dosas)
- **`PlainDosa implements Dosa`** — e.g. "Plain Dosa", 50.
- **`RavaDosa implements Dosa`** — e.g. "Rava Dosa", 70.
  - A base dosa holds NO `Dosa` field — it's the innermost object that ends the
    chain.

### 3. The Decorator base (the crucial class)
- **`DosaDecorator implements Dosa`** — abstract class that **holds a `Dosa`**
  (the wrapped object), set via constructor. Its dual nature is the whole point:
  it IS-A `Dosa` (so it can be wrapped again) AND HAS-A `Dosa` (so it can add to
  what it wraps).

### 4. Concrete Decorators (the extras)
- **`Masala extends DosaDecorator`** — `getPrice()` = `wrapped.getPrice() + 30`;
  `getDescription()` = `wrapped.getDescription() + ", Masala"`.
- **`Cheese extends DosaDecorator`** — `+25`, ", Cheese".
- **`Ghee extends DosaDecorator`** — `+20`, ", Ghee".
  - (Note: name the masala extra so it doesn't collide with a base — e.g.
    `Masala` decorator wrapping a `PlainDosa` *is* your masala dosa.)

### 5. Client
- **`DosaDemo`** with a `main` — build orders by stacking at runtime:
  ```java
  Dosa order = new Ghee(new Cheese(new Masala(new PlainDosa())));
  System.out.println(order.getDescription() + " = " + order.getPrice());
  // Plain Dosa, Masala, Cheese, Ghee = 125.0   (50 + 30 + 25 + 20)
  ```
  Everything stays typed as `Dosa`.

## Done when
- Stacking `new Ghee(new Cheese(new Masala(new PlainDosa())))` prints the combined
  description and `125.0`.
- Adding a new extra (e.g. `Paneer`) = ONE new decorator class, ZERO edits to
  dosas, existing extras, or the client (OCP).
- The same extra works on ANY dosa and can be applied twice (extra cheese) —
  decided at runtime.

## The idea that IS the pattern — "is-a AND has-a"
A decorator **implements `Dosa`** (so it can stand in for a dosa and be wrapped
again) AND **holds a `Dosa`** (so it can add to what it wraps). Each `getPrice()`
= `wrapped.getPrice() + myExtra`; recursion through the wrap chain gives the
total. The base dosa is the base case that stops the recursion.

## When you're done
Ping me and I'll review — the `DosaDecorator` dual nature, the recursive price,
and that adding an extra needs zero edits elsewhere.
