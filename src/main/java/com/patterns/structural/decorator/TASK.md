# Decorator — Structural Pattern (Hands-On Task)

## Problem
Modeling every pizza+topping combination as its own class causes "class
explosion"; using boolean flags forces you to edit `getCost()` for every new
topping and gives no runtime flexibility (see [`BAD-APPROACH.md`](BAD-APPROACH.md)).

## The pattern
Wrap an object in a decorator that **adds behavior** and is **the same type** as
what it wraps, so decorators can be stacked at runtime.

Build it all yourself in this package (`com.patterns.structural.decorator`):

### 1. Component (the common type)
- **`Pizza`** interface:
  ```java
  String getDescription();
  double getCost();
  ```

### 2. Concrete Components (the base pizzas)
- **`Margherita implements Pizza`** — e.g. description "Margherita", cost 150.
- **`Farmhouse implements Pizza`** — e.g. description "Farmhouse", cost 200.

### 3. The Decorator base (the crucial class)
- **`ToppingDecorator implements Pizza`** — abstract class that:
  - **holds a `Pizza`** (the wrapped object) as a field, set via constructor.
  - This is the dual nature: it IS a `Pizza` (implements it) AND HAS a `Pizza`
    (wraps one). That's what lets decorators stack.
  - It may delegate by default (`return pizza.getCost();`) or leave the methods
    abstract for subclasses — your call.

### 4. Concrete Decorators (the toppings)
- **`Cheese extends ToppingDecorator`** — `getCost()` returns
  `super/ wrapped.getCost() + 20`; `getDescription()` returns
  `wrapped.getDescription() + ", Cheese"`.
- **`Mushroom extends ToppingDecorator`** — `+40`, ", Mushroom".
- (add `Paneer` etc. if you like — each is ~5 lines, no edits elsewhere.)

### 5. Client
- **`DecoratorDemo`** with a `main` — build pizzas by stacking at runtime:
  ```java
  Pizza p = new Mushroom(new Cheese(new Farmhouse()));
  System.out.println(p.getDescription() + " = " + p.getCost());
  // Farmhouse, Cheese, Mushroom = 260.0   (200 + 20 + 40)
  ```
  Everything stays typed as `Pizza`.

## Done when
- Stacking `new Mushroom(new Cheese(new Farmhouse()))` prints the combined
  description and cost `260.0` (matches your video's 200 + 20 + 40).
- Adding a new topping (e.g. `Olives`) = ONE new decorator class, ZERO edits to
  pizzas, existing toppings, or the client (OCP).
- The same topping works on ANY pizza, and can even be applied twice (extra
  cheese) — all decided at runtime.

## The idea that IS the pattern — "is-a AND has-a"
A decorator **implements the component interface** (so it can stand in for a
pizza and be wrapped again) AND **holds a component** (so it can add to what it
wraps). Each `getCost()` = `wrapped.getCost() + myExtra`. Recursion through the
wrap chain produces the total.

## Decorator vs the patterns you know
- **Decorator:** same interface in/out, ADDS behavior, stackable at runtime
  (Farmhouse stays a Pizza, just richer).
- **Adapter:** CHANGES the interface to a different one (no new behavior) — what
  you're building next door in `structural/adapter`.
- **Builder:** assembles ONE complex object step by step, then you're done; a
  decorator keeps the object usable and wrappable at every layer.

## When you're done
Ping me and I'll review — especially the `ToppingDecorator` dual nature, the
recursive cost, and that adding a topping needs zero edits elsewhere.
