# ISP — Interface Segregation Principle

## Problem
`RestaurantEmployee` is a fat interface. `Waiter` is forced to implement
`cookFood()` and `doMaintenance()` with empty bodies — it depends on methods
it does not use.

## Your task
Split the fat interface into small, role-specific ones, e.g.:
- `WaiterTask` (serveCustomers, washDishes)
- `ChefTask` (cookFood)
- `MaintenanceTask` (doMaintenance)

Then make each role implement ONLY the interfaces it actually needs. A class
that genuinely does two jobs can implement two interfaces — that's fine.

## Done when
- No class has an empty/throwing method just to satisfy an interface.
- `Waiter` implements only waiter-relevant interface(s).
- Add a `Chef` that implements only `ChefTask` to prove the split works.

## Contrast with LSP
LSP was "the subtype lies about behavior"; ISP is "the interface is too big".
Same smell (empty/throwing methods), different root cause. Notice the difference.
