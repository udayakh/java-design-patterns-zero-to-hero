# Observer — The Bad Approach

## Naive code (the problem)
The publisher is hard-wired to specific display devices and notifies each by hand:

```java
public class WeatherStation {
    private double temperature;
    private final PhoneDisplay phoneDisplay = new PhoneDisplay();   // hard-wired
    private final TVDisplay tvDisplay = new TVDisplay();            // hard-wired

    public void setTemperature(double t) {
        this.temperature = t;
        phoneDisplay.show(t);   // notify each known display manually
        tvDisplay.show(t);      // new display => new line here
    }
}
```

## Why it's bad
- **Tight coupling** — the station knows the concrete `PhoneDisplay` / `TVDisplay`
  types.
- **Open-Closed violation** — adding a `WebDisplay` means editing `setTemperature()`.
- **No runtime subscribe/unsubscribe** — you can't add or drop a listener without
  changing the station's code.

## The fix
The station keeps a `List<Observer>` and broadcasts `update(...)` to all of them,
depending only on the `Observer` abstraction. Observers subscribe/unsubscribe at
runtime via `addObserver`/`removeObserver`. See
[`WeatherStation.java`](WeatherStation.java) and [`UML.md`](UML.md).
