# DIP — Dependency Inversion Principle

## Problem
`MacBook` (high-level) `new`s up `WiredKeyboard` and `WiredMouse` (low-level)
inside its constructor. It can never use a Bluetooth keyboard without editing
`MacBook`. Policy depends on detail.

## Your task
Make both the high-level and low-level code depend on abstractions:
- Introduce `Keyboard` and `Mouse` interfaces.
- `WiredKeyboard` (and a new `BluetoothKeyboard`) implement `Keyboard`; same for mice.
- `MacBook` should receive a `Keyboard` and `Mouse` via its CONSTRUCTOR
  (dependency injection) and depend only on the interfaces.

## Done when
- `MacBook` contains no `new WiredKeyboard()` / `new WiredMouse()`.
- You can construct a `MacBook` with wired OR bluetooth peripherals from `main`,
  changing nothing inside `MacBook`.

## Payoff
This is the exact principle behind the Factory Method / Abstract Factory work
you're starting — the client holds an abstraction; something else decides the
concrete type. DIP is the "why," the pattern is the "how."
