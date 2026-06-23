# Adapter (Travel Charger) — Hands-On Task

## Problem
Your laptop charges through an `IndianPlug`, but the only outlet available is a
`EuropeanSocket` you can't modify. Calling the socket directly couples the laptop
to the wrong type (see [`BAD-APPROACH.md`](BAD-APPROACH.md)).

## The pattern
Build an **adapter** that implements the interface the client wants (the *Target*)
and internally delegates to the incompatible class (the *Adaptee*).

Build it all yourself in this package
(`com.patterns.structural.adapter.charger`):

### 1. Target (what the laptop expects)
- **`IndianPlug`** interface — `void supplyPower();`

### 2. Adaptee (the foreign class you can't change)
- **`EuropeanSocket`** — treat as untouchable:
  ```java
  public void provideElectricity() {
      System.out.println("European socket: supplying power via round 2-pin");
  }
  ```

### 3. Adapter
- **`EuropeanSocketAdapter implements IndianPlug`** that:
  - **holds a `EuropeanSocket`** (composition — field set in constructor).
  - implements `supplyPower()` by delegating: call `socket.provideElectricity()`.

### 4. Client
- **`ChargerDemo`** with a `main`:
  - create a `EuropeanSocket`, wrap it in `new EuropeanSocketAdapter(...)`.
  - hold it as an **`IndianPlug`** reference and call `supplyPower()`.
  - The client must talk ONLY to `IndianPlug` — it never names `EuropeanSocket`
    except for the one wiring line.

## Done when
- The laptop/client uses only `IndianPlug`; the European socket is reached purely
  through the adapter.
- Adding a `UKSocket` later = a new `UKSocketAdapter implements IndianPlug`, with
  ZERO edits to the client.

## Same idea as the Stripe adapter — say it back
"implements one, holds the other":
- `implements IndianPlug` → the laptop accepts it
- `private EuropeanSocket socket;` → it does the real work by delegating

## When you're done
Ping me and I'll review — that the client is socket-type-free and the delegation
lives only in the adapter.
