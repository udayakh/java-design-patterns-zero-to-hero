# Adapter — Structural Pattern (Hands-On Task)

## Problem
Your code expects a `PaymentProcessor` (`pay(double dollars)`), but the only way
to actually charge a card is a third-party `StripeApi` whose method is
`makePayment(long cents, String currency)` — and you can't change it. Calling
Stripe directly couples the client to the vendor and scatters the
dollars→cents translation everywhere (see [`BAD-APPROACH.md`](BAD-APPROACH.md)).

## The pattern
Build an **adapter** that implements the interface your client wants (the
*Target*) and internally delegates to the incompatible class (the *Adaptee*),
translating between them.

Build it all yourself in this package (`com.patterns.structural.adapter`):

### 1. Target (the interface your client wants)
- **`PaymentProcessor`** — `void pay(double amountInDollars);`

### 2. Adaptee (the incompatible class you can't change)
- **`StripeApi`** — simulate the third party:
  ```java
  public void makePayment(long amountInCents, String currency) {
      System.out.println("Stripe charged " + amountInCents + " " + currency + " cents");
  }
  ```
  Treat this as untouchable — pretend it's a library jar.

### 3. Adapter (the translator)
- **`StripePaymentAdapter implements PaymentProcessor`** that:
  - **holds a `StripeApi`** instance (composition — store it as a field, take it
    in the constructor).
  - implements `pay(double dollars)` by translating: convert dollars→cents
    (`Math.round(dollars * 100)`), pick a currency, and call
    `stripe.makePayment(cents, "USD")`.
  - This is the ONE place the translation lives.

### 4. Client
- **`AdapterDemo`** with a `main`:
  - hold a `PaymentProcessor` reference (the Target), assign it a
    `new StripePaymentAdapter(new StripeApi())`, and call `pay(49.99)`.
  - The client must talk ONLY to `PaymentProcessor` — it never names `StripeApi`.

## Done when
- The client depends only on `PaymentProcessor`; `StripeApi` appears nowhere in it.
- The dollars→cents translation exists in exactly ONE place (the adapter).
- Swapping in a second gateway = a new `PayPalAdapter implements PaymentProcessor`,
  with ZERO edits to the client (just wire a different adapter).

## Key idea to internalize — "implements one, wraps the other"
An adapter **implements the Target interface** (so the client accepts it) and
**holds the Adaptee** (so it can do the real work). That dual nature is the
whole pattern:
- `implements PaymentProcessor`  → fits the client's expectation
- `private StripeApi stripe;`     → delegates the actual job

## Object Adapter vs Class Adapter (know the distinction)
- **Object adapter (do this):** the adapter *holds* the adaptee as a field
  (composition). Flexible — can adapt subclasses, wrap at runtime. Preferred.
- **Class adapter:** the adapter *extends* the adaptee (inheritance). Possible in
  Java only if the adaptee is a class and you don't need to extend anything else.
  Rigid — avoid unless there's a reason.

## When you're done
Ping me and I'll review — especially that the client is vendor-free and the
translation is isolated to the adapter.
