# LSP — The Bad Approach

## Naive code (the problem)
A `Bike` interface assumes every bike has an engine, so a `Bicycle` is forced to
implement an engine method it can't honor — and throws:

```java
public interface Bike {
    void turnOnEngine();
    void accelerate();
}

public class Bicycle implements Bike {
    @Override
    public void turnOnEngine() {
        throw new UnsupportedOperationException("A bicycle has no engine!");
    }
    @Override
    public void accelerate() {
        System.out.println("Bicycle accelerating by pedaling.");
    }
}
```

## Why it's bad
- **Not substitutable** — code holding a `Bike` can legally call `turnOnEngine()`,
  and a `Bicycle` blows up. The subtype narrowed the supertype's contract.
- The `throw` is a code smell signalling the type hierarchy is wrong.

## The fix
Keep only universal behavior on `Bike` (`accelerate`), and move `turnOnEngine()`
to a separate `EnginePowered` interface. `Motorcycle` implements both; `Bicycle`
implements only `Bike` and never lies. See [`TASK.md`](TASK.md).
