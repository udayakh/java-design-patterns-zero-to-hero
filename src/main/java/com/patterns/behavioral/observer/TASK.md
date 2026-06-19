# Observer — Behavioral Pattern

## Problem
`WeatherStation` is hard-wired to `PhoneDisplay` and `TVDisplay`. It knows their
concrete types and notifies each by hand in `setTemperature()`. Adding a display
means editing the station (OCP violation), and you can't subscribe/unsubscribe
at runtime.

## The pattern (push model first)
Let the publisher hold a list of *abstract* observers and notify them on change,
without knowing who they are.

1. **`Observer`** interface — one method, `update(double temperature)`.
2. **`Subject`** (a.k.a. Observable) interface:
   - `addObserver(Observer o)`
   - `removeObserver(Observer o)`
   - `notifyObservers()`
3. **`WeatherStation implements Subject`** — holds a `List<Observer>`, and
   `setTemperature()` stores the value then calls `notifyObservers()`, which
   loops the list calling `update(temperature)` on each. The station NO LONGER
   names any concrete display.
4. **`PhoneDisplay` / `TVDisplay` implement `Observer`** — their `update(...)`
   prints the reading.
5. **`ObserverDemo`** — create a station, register a phone + TV, set a
   temperature (both update), then `removeObserver(phone)` and set again
   (only the TV updates). That add/remove-at-runtime is the payoff.

## Done when
- `WeatherStation` contains zero references to `PhoneDisplay` / `TVDisplay`.
- Adding a new display (e.g. `WebDisplay`) is a NEW FILE with zero station edits.
- The demo shows observers reacting to a change, and one unsubscribing.

## Stretch — the pull model
In the push model the publisher decides what data to send (`update(double)`).
In the PULL model:
- `update()` takes NO data (or just the `Subject`).
- Observers hold a reference to the `WeatherStation` and call getters
  (`station.getTemperature()`, `station.getHumidity()`) to fetch what THEY need.
Try converting one observer to pull and note the trade-off: push is simple but
rigid; pull lets observers choose, at the cost of coupling them to the station's API.

## Connection
Same backbone as Strategy: the publisher depends on the `Observer` abstraction
(DIP) and new observers slot in with no edits to existing code (OCP). Difference:
Strategy swaps ONE algorithm the object runs; Observer broadcasts an event to MANY
listeners. This is the engine behind event listeners, pub/sub, and reactive UIs.
