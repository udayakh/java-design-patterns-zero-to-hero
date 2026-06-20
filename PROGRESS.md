# Progress Tracker

> Goal: interview-ready on the core design patterns. Target ~2 months (interview ~Aug 2026).
> Method for each pattern: (1) read the *problem* it solves, (2) rebuild it from a blank file, (3) write one line "Use ___ when ___", (4) name its JDK example. Revisit old patterns before each new one (spaced repetition).

## Current Pattern: #06 — State (next up)

## Summary
| Completed | In Progress | Remaining |
|-----------|-------------|-----------|
| 5 | 0 | 18 |

Plus SOLID principles (SRP, OCP, LSP, ISP, DIP) — done.

## Roadmap (the interview tiers)

**Must know cold** — Singleton ✅, Factory Method ✅, Abstract Factory ✅, Builder ⬜, Strategy ✅, Observer ✅, Decorator ⬜, Adapter ⬜, Facade ⬜

**Know well** — Proxy ⬜, Command ⬜, Template Method ⬜, Composite ⬜, Iterator ⬜, State ⬜

**Be aware of** — Prototype ⬜, Bridge ⬜, Flyweight ⬜, Chain of Responsibility ⬜, Mediator ⬜, Memento ⬜, Visitor ⬜, Interpreter ⬜

## Journey Log

### Pattern 05 — Observer ✅
- **Status:** Done
- **Key concept:** One-to-many dependency; when the subject changes state, all observers are notified automatically.
- **JDK example:** listeners (e.g. `addActionListener`), `java.util.concurrent.Flow`.

### Pattern 04 — Strategy ✅
- **Status:** Done
- **Key concept:** Define a family of interchangeable algorithms, encapsulate each, make them swappable at runtime.
- **JDK example:** `Comparator` passed to `Collections.sort()`.

### Pattern 03 — Abstract Factory ✅
- **Status:** Done
- **Key concept:** Create *families* of related objects without specifying concrete classes.
- **JDK example:** `DocumentBuilderFactory`, `javax.xml.parsers`.

### Pattern 02 — Factory Method ✅
- **Status:** Done (2026-05-14)
- **Key concept:** Defer instantiation to subclasses — superclass defines an abstract `createX()`, subclasses decide the concrete class.
- **Code:** `Dialog` (abstract) + `createButton()`, `WindowsDialog`/`MacDialog`, `WindowsButton`/`MacButton`, demo picks dialog by OS.
- **JDK example:** `Calendar.getInstance()`, `NumberFormat.getInstance()`.

### Pattern 01 — Singleton ✅
- **Status:** Done (2026-05-14)
- **Key concept:** Ensure a class has only one instance, and provide a global access point to it.
- **Lesson learned:** Private constructor + `private static` field + `synchronized getInstance()` = thread-safe Singleton.
- **JDK example:** `Runtime.getRuntime()`.

---

*Completed patterns logged here with notes and lessons learned.*
