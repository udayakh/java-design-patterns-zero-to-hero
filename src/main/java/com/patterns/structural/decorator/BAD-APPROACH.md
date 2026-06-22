# Decorator — The Bad Approach

## Scenario
A pizza shop sells base pizzas (`Margherita`, `Farmhouse`) and toppings (cheese,
mushroom, paneer, ...). Each pizza needs a `getDescription()` and a `getCost()`.
Customers can combine any toppings in any quantity.

## Naive code (the problem) — "class explosion"
You make a class for every combination:
```java
class Margherita { ... }
class MargheritaWithCheese { ... }
class MargheritaWithCheeseAndMushroom { ... }
class MargheritaWithCheeseAndMushroomAndPaneer { ... }
class Farmhouse { ... }
class FarmhouseWithCheese { ... }
class FarmhouseWithPaneer { ... }
// ...and on, and on — every base x every subset of toppings
```
Or you stuff boolean flags into one class:
```java
class Pizza {
    boolean cheese, mushroom, paneer;   // add a field + edit getCost() for every new topping
    double getCost() {
        double c = base;
        if (cheese)   c += 20;
        if (mushroom) c += 40;
        if (paneer)   c += 50;
        return c;
    }
}
```

## Why it's bad
- **Class explosion** — N bases x 2^M topping combinations = an unmanageable
  number of classes.
- **Open-Closed violation** — adding "olives" means new classes (or editing
  `Pizza.getCost()` and every flag-based method).
- **No runtime flexibility** — you can't let a user stack "extra cheese twice" or
  build combinations decided at runtime; everything is fixed at compile time.
- **Duplication** — cost/description logic repeated across combination classes.

## The fix
Make each topping a **decorator** that *wraps* a pizza and is *itself* a pizza.
`getCost()` returns the wrapped pizza's cost **plus** its own. Stack them at
runtime: `new Mushroom(new Cheese(new Farmhouse()))`. See [`TASK.md`](TASK.md).
