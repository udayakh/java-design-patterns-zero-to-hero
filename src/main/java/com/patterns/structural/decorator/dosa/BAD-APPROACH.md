# Decorator (Dosa) — The Bad Approach

## Scenario
A South-Indian tiffin centre sells base dosas (`PlainDosa`, `RaviDosa`) and lets
customers add extras: masala, cheese, onion, ghee, extra podi, ... Each order
needs a `getDescription()` and a `getPrice()`. Any extra can go on any dosa, in
any combination.

## Naive code (the problem) — "class explosion"
A class for every combination:
```java
class PlainDosa { ... }
class MasalaDosa { ... }                       // plain + masala
class CheeseMasalaDosa { ... }                 // plain + masala + cheese
class OnionCheeseMasalaDosa { ... }            // ...+ onion
class RaviDosa { ... }
class GheeRaviDosa { ... }
// ...every base x every subset of extras
```
Or one class drowning in flags:
```java
class Dosa {
    boolean masala, cheese, onion, ghee;       // add a field + edit getPrice() per extra
    double getPrice() {
        double p = base;
        if (masala) p += 30;
        if (cheese) p += 25;
        if (onion)  p += 15;
        if (ghee)   p += 20;
        return p;
    }
}
```

## Why it's bad
- **Class explosion** — bases x 2^extras = an unmanageable pile of classes.
- **Open-Closed violation** — adding "paneer" means new classes (or editing
  `Dosa.getPrice()` and every flag method).
- **No runtime flexibility** — can't let a customer add "extra cheese twice" or
  build the order at runtime; combinations are frozen at compile time.
- **Duplication** — price/description logic copy-pasted across combo classes.

## The fix
Make each extra a **decorator** that *wraps* a dosa and *is itself* a dosa.
`getPrice()` returns the wrapped dosa's price **plus** its own. Stack at runtime:
`new Ghee(new Cheese(new MasalaTopping(new PlainDosa())))`. See [`TASK.md`](TASK.md).
