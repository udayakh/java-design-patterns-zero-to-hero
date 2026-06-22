# Prototype — Creational Pattern (Hands-On Task)

## Problem
Duplicating an object by `instanceof`-ing its type and rebuilding it field by
field couples the client to every concrete class, breaks encapsulation, and
breaks the moment you add a new type (see [`BAD-APPROACH.md`](BAD-APPROACH.md)).

## The pattern
Give objects the ability to **clone themselves**. The client copies an object by
calling `clone()` on it — without knowing its concrete class or its fields.

Build it all yourself in this package (`com.patterns.creational.prototype`):

### 1. Prototype abstraction
- **`Shape`** — an abstract class (or interface) declaring:
  ```java
  Shape clone();          // each shape returns a copy of ITSELF
  void render();          // prints what it is + its state
  ```
- Give it common fields `int x, y;` and `String color;` (with getters/setters or a
  copy constructor — your call).

### 2. Concrete prototypes
- **`Circle extends Shape`** — adds `int radius;`. Its `clone()` returns a **new
  `Circle`** copying x, y, color, radius.
- **`Rectangle extends Shape`** — adds `int width, height;`. Its `clone()` returns
  a **new `Rectangle`** copying its fields.
- Recommended: give each a **copy constructor** `Circle(Circle source)` and have
  `clone()` do `return new Circle(this);` — clean and reusable.

### 3. Client
- **`PrototypeDemo`** with a `main`:
  1. Build an original `Circle` (set position/color/radius) and `render()` it.
  2. `Shape copy = original.clone();` — note the variable is typed `Shape`, the
     client never names `Circle`.
  3. Mutate the copy (e.g. move it, change color) and `render()` both.
  4. **Prove they're independent:** changing the copy must NOT change the original.

## Done when
- The client duplicates a shape via `clone()` with **no `instanceof` and no cast**.
- Each shape copies its own fields; adding a `Triangle` = one new class, ZERO
  edits to existing shapes or the client (OCP).
- Mutating a clone leaves the original untouched.

## The trap to watch for — shallow vs deep copy (the real lesson of Prototype)
If a shape later holds a **mutable reference** field (e.g. a `List<Point> points`
or a `Style style` object), a naive `clone()` that copies the *reference* makes the
clone and original **share** that object — mutate one, the other changes too.

- **Stretch:** add a mutable field (e.g. `List<String> tags` or a small `Style`
  object) to `Shape`. First copy it by reference and **observe the bug** (changing
  the clone's list mutates the original's). Then fix `clone()` to **deep-copy**
  that field (`new ArrayList<>(source.tags)` / clone the `Style`). This is THE
  thing interviewers probe on Prototype.

## A note on Java's `Cloneable`
Java has a built-in `Cloneable` interface + `Object.clone()`. It's widely
considered **broken** (no constructor runs, returns `Object`, shallow by default,
checked `CloneNotSupportedException`). For learning the *pattern*, prefer your own
`clone()` method with a **copy constructor** — clearer and safer. You can read
about `Cloneable` afterward to know why it's avoided.

## When you're done
Ping me and I'll review — especially the independence of clones and how you handle
the shallow/deep-copy trap.
