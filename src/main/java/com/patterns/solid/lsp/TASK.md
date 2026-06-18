# LSP — Liskov Substitution Principle

## Problem
`Bike` assumes every bike has an engine. `Bicycle` is forced to implement
`turnOnEngine()` and throws — so a `Bicycle` is NOT a safe substitute for a
`Bike`. Code written against `Bike` blows up when handed a `Bicycle`.

## Your task
Redesign so every subtype can fully honor its supertype's contract:
- Separate the "has an engine" capability from the "is a ride-able bike" capability.
- A good shape: a base abstraction for what ALL bikes do (e.g. `accelerate`),
  and a separate abstraction (e.g. `EnginePowered`) only engine bikes implement.
- `Motorcycle` implements both; `Bicycle` implements only the engine-free one.

## Done when
- No method anywhere throws "unsupported" just to satisfy an interface.
- Any subtype can replace its supertype without surprising the caller.

## Note
You'll notice this fix looks a lot like ISP next door — LSP violations are very
often interface-shape problems in disguise. That overlap is worth feeling.
