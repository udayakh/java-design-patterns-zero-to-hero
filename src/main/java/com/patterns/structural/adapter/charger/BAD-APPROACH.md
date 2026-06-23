# Adapter (Travel Charger) — The Bad Approach

## Scenario
You travel to Europe with an Indian laptop charger. Your laptop knows how to draw
power through an **Indian plug** (`IndianPlug.supplyPower()`). The hotel wall only
has a **European socket** (`EuropeanSocket.provideElectricity()`) — a class you
obviously can't change.

## Naive code (the problem)
The client gives up on its own `IndianPlug` interface and pokes the European
socket directly:
```java
public class Laptop {
    public void charge(EuropeanSocket socket) {   // now coupled to the wrong type
        socket.provideElectricity();              // foreign API leaks into the laptop
    }
}
```

## Why it's bad
- **Wrong coupling** — `Laptop` now depends on `EuropeanSocket`. Back home with an
  Indian socket, it won't compile.
- **Lost abstraction** — the laptop was designed around `IndianPlug`; bypassing it
  means every device must learn every socket type in the world.
- **No reuse** — a UK socket later means editing `Laptop` again.

## The fix
Build an **adapter** that *implements* `IndianPlug` (so the laptop accepts it) and
internally *holds* a `EuropeanSocket`, forwarding the call. The laptop keeps
talking to `IndianPlug` and never knows a European socket is behind it.
See [`TASK.md`](TASK.md).
