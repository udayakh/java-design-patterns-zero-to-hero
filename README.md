# Java Design Patterns — Zero to Hero

A hands-on learning journey through all 23 classic GoF (Gang of Four) design patterns using Java 21 and Maven.

## Structure

Each pattern lives in its own Maven module under the project root.

```
java-design-patterns/
├── README.md
├── PROGRESS.md
├── pom.xml  (parent POM)
├── 01-singleton/
├── 02-factory-method/
├── 03-abstract-factory/
...
```

## Pattern Categories

### Creational (5 patterns) — *How objects are created*
| # | Pattern | Status |
|---|---------|--------|
| 01 | Singleton | ✅ Done |
| 02 | Factory Method | ✅ Done |
| 03 | Abstract Factory | ✅ Done |
| 04 | Builder | 🔨 In progress |
| 05 | Prototype | ⬜ Not started |

### Structural (7 patterns) — *How objects are composed*
| # | Pattern | Status |
|---|---------|--------|
| 06 | Adapter | ⬜ Not started |
| 07 | Bridge | ⬜ Not started |
| 08 | Composite | ⬜ Not started |
| 09 | Decorator | ⬜ Not started |
| 10 | Facade | ⬜ Not started |
| 11 | Flyweight | ⬜ Not started |
| 12 | Proxy | ⬜ Not started |

### Behavioral (11 patterns) — *How objects communicate*
| # | Pattern | Status |
|---|---------|--------|
| 13 | Chain of Responsibility | ⬜ Not started |
| 14 | Command | ⬜ Not started |
| 15 | Iterator | ⬜ Not started |
| 16 | Mediator | ⬜ Not started |
| 17 | Memento | ⬜ Not started |
| 18 | Observer | ✅ Done |
| 19 | State | ⬜ Not started |
| 20 | Strategy | ✅ Done |
| 21 | Template Method | ⬜ Not started |
| 22 | Visitor | ⬜ Not started |
| 23 | Interpreter | ⬜ Not started |

## Pattern Cheat Sheet

Quick "when do I reach for this?" reference — situation → pattern (how it works · a JDK example · the trade-off).

| When you need… | Reach for |
|----------------|-----------|
| Exactly one shared instance everywhere (config, logging, pool) | **Singleton** — private ctor + static instance + `getInstance()`. *JDK:* `Runtime.getRuntime()`. *Trade-off:* global state, hard to test, thread-safety care. |
| Superclass shouldn't know which concrete class to create; subclasses decide | **Factory Method** — abstract `createX()`; each subclass returns a concrete product. *JDK:* `Calendar.getInstance()`. *Trade-off:* one product type per factory. |
| Create families of related objects that must be consistent | **Abstract Factory** — factory interface with several `createX()`; each concrete factory builds one family. *JDK:* `DocumentBuilderFactory`. *Trade-off:* new product changes every factory. |
| An object with many optional fields; avoid telescoping constructors | **Builder** — chained setters then `build()` returns an immutable object. *JDK:* `StringBuilder`. *Trade-off:* boilerplate. |
| Swap an algorithm at runtime | **Strategy** — algorithm interface, concrete strategies, context delegates. *JDK:* `Comparator` in `Collections.sort()`. *Trade-off:* client must know the strategies. |
| One object changes; many others must be notified | **Observer** — subject holds an observer list, calls `update()` on change. *JDK:* event listeners, `Flow`. *Trade-off:* order undefined, leak risk. |
| Add behavior to an object dynamically without subclass explosion | **Decorator** — wrapper with the same interface holds the wrapped object. *JDK:* `BufferedReader` wrapping `FileReader`. *Trade-off:* many wrappers. |
| Two incompatible interfaces must work together | **Adapter** — implements the target interface, translates to the adaptee. *JDK:* `Arrays.asList`, `InputStreamReader`. *Trade-off:* indirection; not for adding behavior. |
| A complex subsystem needs one simple entry point | **Facade** — single class orchestrates the subsystem. *JDK:* SLF4J `LoggerFactory`. *Trade-off:* can become a god-object. |
| A stand-in that controls access to another object (lazy/remote/cache/auth) | **Proxy** — same interface, adds control then delegates. *JDK:* `java.lang.reflect.Proxy`, Spring AOP. *Trade-off:* vs Decorator — Proxy controls access. |
| Encapsulate a request as an object (queue, log, undo) | **Command** — `Command.execute()`; holds a receiver; an invoker triggers it. *JDK:* `Runnable`, `Callable`. *Trade-off:* a class per command. |
| A fixed algorithm skeleton with varying steps | **Template Method** — a `final` method sets the order, abstract hooks are overridden. *JDK:* `AbstractList`, `InputStream.read()`. *Trade-off:* inheritance, less flexible than Strategy. |
| Treat individual objects and groups uniformly (trees) | **Composite** — leaf and composite share an interface; the composite holds children. *JDK:* Swing `Component`/`Container`. *Trade-off:* type safety loosens. |
| Traverse a collection without exposing its internals | **Iterator** — `hasNext()` / `next()`. *JDK:* `java.util.Iterator`. *Trade-off:* concurrent modification. |
| Behavior changes by internal state; avoid a big `if`/`switch` | **State** — each state is a class with a common interface; the context swaps state. *Trade-off:* vs Strategy — State transitions itself. |

### Easily confused pairs

| Question | Answer |
|----------|--------|
| Factory Method vs Abstract Factory? | Factory Method = one product via inheritance. Abstract Factory = a family of products via composition. |
| Strategy vs State? | Same structure. Strategy: the client picks the algorithm, no self-transition. State: the object transitions itself between states. |
| Decorator vs Proxy? | Decorator adds behavior; Proxy controls access. Same wrapping structure. |
| Adapter vs Decorator? | Adapter changes the interface; Decorator keeps it and adds behavior. |

## How This Works

1. I explain the pattern concept and give you a coding challenge
2. You implement it
3. I review and give feedback
4. We move to the next pattern

## Requirements

- Java 21
- Maven 3.8+
