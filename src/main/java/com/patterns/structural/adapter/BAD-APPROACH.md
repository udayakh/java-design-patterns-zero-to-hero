# Adapter — The Bad Approach

## Scenario
Your checkout code is written against your own `PaymentProcessor` interface:
```java
public interface PaymentProcessor {
    void pay(double amountInDollars);
}
```
Now the business wants to accept payments through a **third-party gateway**,
`StripeApi`, which you cannot modify and whose method looks nothing like yours:
```java
// third-party library — you can't change this
public class StripeApi {
    public void makePayment(long amountInCents, String currency) { ... }
}
```

## Naive code (the problem)
The client gives up on its own interface and starts calling the third-party API
directly, scattering translation logic everywhere:
```java
public class CheckoutService {
    private StripeApi stripe = new StripeApi();

    public void checkout(double dollars) {
        // translation bleeds into business code, repeated at every call site
        long cents = Math.round(dollars * 100);
        stripe.makePayment(cents, "USD");
    }
}
```

## Why it's bad
- **Tight coupling to the vendor** — `CheckoutService` now depends directly on
  `StripeApi`. Swapping to PayPal means rewriting the client.
- **Translation duplicated** — the dollars→cents + "USD" conversion is copy-pasted
  into every place that pays.
- **Lost abstraction** — your clean `PaymentProcessor` interface is bypassed; the
  rest of the app can no longer depend on it.
- **Hard to test** — you can't substitute a fake processor; you're nailed to Stripe.

## The fix
Write an **adapter** that *implements your* `PaymentProcessor` interface and, inside,
*delegates* to the `StripeApi`, doing the translation in one place. The client keeps
talking to `PaymentProcessor` and never knows Stripe exists. See [`TASK.md`](TASK.md).
