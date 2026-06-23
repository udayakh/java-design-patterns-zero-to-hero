# Simple Factory — The Bad Approach

> Note: "Simple Factory" is an *idiom*, not one of the 23 GoF patterns. It's the
> stepping stone the video uses before Factory Method.

## Scenario
An app sends notifications by Email, SMS, or Push. Different parts of the code
need to create the right `Notification` based on a user preference string.

## Naive code (the problem)
Every caller `new`s up the concrete type itself, branching on the string — and
the same branch is copy-pasted wherever a notification is created:
```java
// in the signup flow
Notification n;
if (type.equals("email"))      n = new EmailNotification();
else if (type.equals("sms"))   n = new SmsNotification();
else if (type.equals("push"))  n = new PushNotification();
else throw new IllegalArgumentException(type);
n.send("Welcome!");

// ...and the SAME if/else reappears in the order flow, the reminder job, ...
```

## Why it's bad
- **Duplication** — the selection `if/else` is scattered across many callers.
- **Tight coupling** — every caller names every concrete class.
- **Hard to change** — if construction gains a step (e.g. load config), you must
  fix it in every copy.

## The fix (Simple Factory)
Move the `new`-ing + branching into ONE class — a `NotificationFactory` with a
method that takes the type and returns a `Notification`. Callers ask the factory
instead of `new`-ing. The construction logic now lives in a single place.
See [`TASK.md`](TASK.md).

## Honest caveat (the lesson)
Simple Factory **centralizes** the branch but doesn't remove it — the factory
still has a `switch` you must edit for every new type, so it **violates the
Open-Closed Principle**. Feeling that limitation is exactly why Factory Method
(which you've already built) exists.
