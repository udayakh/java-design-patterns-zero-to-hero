# Simple Factory — Hands-On Task (creational idiom)

## Problem
Creating notifications with a copy-pasted `if/else` in every caller duplicates the
selection logic and couples callers to concrete classes (see
[`BAD-APPROACH.md`](BAD-APPROACH.md)).

## The idea
Put the object creation in ONE factory class. Callers hand it a type and get back
the product through an interface — they never `new` a concrete class.

Build it all yourself in this package (`com.patterns.creational.simplefactory`):

### 1. Product
- **`Notification`** interface — `void send(String message);`

### 2. Concrete Products
- **`EmailNotification`**, **`SmsNotification`**, **`PushNotification`** — each
  `implements Notification` and `send()` prints how it delivered (e.g.
  "EMAIL: Welcome!").

### 3. The Simple Factory
- **`NotificationFactory`** with a creation method:
  ```java
  public static Notification create(String type) {
      switch (type.toLowerCase()) {
          case "email": return new EmailNotification();
          case "sms":   return new SmsNotification();
          case "push":  return new PushNotification();
          default: throw new IllegalArgumentException("Unknown type: " + type);
      }
  }
  ```
  - `static` is the common "Simple Factory" style. (An enum key instead of a
    String is a fine upgrade if you like.)
  - This is the ONE place the branching + `new` lives now.

### 4. Client
- **`SimpleFactoryDemo`** with a `main` — call
  `NotificationFactory.create("email").send("Welcome!")` for a couple of types.
  The client holds `Notification` (interface) and never names a concrete class.

## Done when
- No caller `new`s a concrete notification; they all go through the factory.
- The selection logic exists in exactly ONE place (the factory).
- A `Notification n = NotificationFactory.create("sms"); n.send("Hi");` works.

## The point to FEEL (this is the whole exercise)
Now add a 4th type, `SlackNotification`. Notice you must **edit
`NotificationFactory`'s `switch`** to support it. That edit to existing, working
code is the **Open-Closed Principle violation** — Simple Factory localizes
creation but can't be extended without modification.

Then recall your `Logistics` (Factory Method): adding `AirLogistics` needed a
**new class and ZERO edits** to existing code. That contrast is the reason
Factory Method is a step up.

## Simple Factory vs Factory Method vs Abstract Factory
- **Simple Factory:** one class picks the product with an `if`/`switch` (not a GoF
  pattern; violates OCP).
- **Factory Method:** a subclass picks the product via overriding (OCP-friendly).
- **Abstract Factory:** a factory object produces a whole family of matching
  products.

## When you're done
Ping me and I'll review — and especially ask you to point at the exact line that
violates OCP.
