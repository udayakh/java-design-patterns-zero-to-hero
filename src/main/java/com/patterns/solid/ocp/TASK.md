# OCP — Open-Closed Principle

## Problem
`InvoiceDAO.saveInvoice` switches on a `storageType` string. Adding a new
target means editing this method — modifying working code instead of extending.

## Your task
Invert it so new storage targets are added *without touching existing code*:
- Define an abstraction `InvoiceDAO` (interface or abstract class) with `save(Invoice)`.
- Provide `DatabaseInvoiceDAO` and `FileInvoiceDAO` implementations.
- Adding `CloudInvoiceDAO` later must require ZERO edits to existing classes.

## Done when
- There is no `if`/`switch` on storage type anywhere.
- A caller picks the implementation and calls `save(invoice)`.
- You could add a third storage type by adding ONE new file only.

## Connection
This is Factory Method's whole motivation — notice you'll soon want a *factory*
to choose which DAO to hand the caller. Keep that in mind for the patterns work.
