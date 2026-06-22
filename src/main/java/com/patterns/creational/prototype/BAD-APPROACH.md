# Prototype — The Bad Approach

## Scenario
A graphics editor lets users **duplicate** shapes on a canvas. Each shape has a
position and styling. The user selects a shape and hits "copy".

## Naive code (the problem)
To duplicate a shape, the client inspects its concrete type and rebuilds it field
by field:
```java
public Shape duplicate(Shape original) {
    if (original instanceof Circle) {
        Circle c = (Circle) original;
        Circle copy = new Circle();
        copy.setX(c.getX());
        copy.setY(c.getY());
        copy.setRadius(c.getRadius());
        copy.setColor(c.getColor());
        return copy;
    } else if (original instanceof Rectangle) {
        Rectangle r = (Rectangle) original;
        Rectangle copy = new Rectangle();
        copy.setX(r.getX());
        copy.setY(r.getY());
        copy.setWidth(r.getWidth());
        copy.setHeight(r.getHeight());
        copy.setColor(r.getColor());
        return copy;
    }
    // ...a new branch for every shape type, forever
    throw new IllegalStateException("unknown shape");
}
```

## Why it's bad
- **Client must know every concrete type** — `instanceof` + cast for each shape.
- **Breaks encapsulation** — to copy, the client reads/writes every field,
  including ones that should be private implementation detail.
- **Open-Closed violation** — adding a `Triangle` means editing `duplicate()`.
- **Easy to get wrong** — forget to copy one field (or copy a mutable field *by
  reference*) and the "copy" silently shares state with the original.

## The fix
Let each shape **copy itself**. Put a `clone()` method on the `Shape` abstraction;
each concrete shape returns a new instance of its own type with its fields copied.
The client just calls `shape.clone()` — no `instanceof`, no field-by-field
rebuild. See [`TASK.md`](TASK.md).
