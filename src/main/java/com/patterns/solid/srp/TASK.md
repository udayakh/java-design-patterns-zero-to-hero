# SRP — Single Responsibility Principle

## Problem
`Invoice` does three jobs: compute totals, persist itself, and print itself.
Three reasons to change living in one class.

## Your task
Split the responsibilities into separate classes:
- `Invoice` — keeps the data and the business calculation (`calculateTotal`) only.
- `InvoiceDAO` — responsible for persistence (`saveToDatabase`).
- `InvoicePrinter` — responsible for presentation (`printInvoice`).

`InvoiceDAO` and `InvoicePrinter` should take an `Invoice` to operate on.

## Done when
- `Invoice` has no `save*` or `print*` methods.
- Each new class has exactly one reason to change.
- A tiny `main` (or test) wires them together: build an `Invoice`, print it, save it.

## Stretch
What happens to these classes when SRP is *already* satisfied and you next need
"save to file" instead of "save to DB"? Note it — that's the bridge to OCP next door.
