# Factory Method — Creational Pattern

## Problem
The client code needs a `Button`, but the *right* concrete button depends on the
OS (Windows vs Mac). The naive fix is an `if (os == windows) new WindowsButton()
else new MacButton()` block — and that same branch gets **copy-pasted into every
place that builds a button** (see [`BAD-APPROACH.md`](BAD-APPROACH.md)). The
client is tightly coupled to every concrete product, and adding a `LinuxButton`
means editing every one of those branches.

## The pattern
Define an interface for creating an object, but let **subclasses decide** which
concrete class to instantiate. Creation is deferred to subclasses.

You already have the **product** side: a `Button` interface and the
`WindowsButton` / `MacButton` concrete classes. Build the **creator** side:

1. **`Dialog`** abstract class (the Creator) with the factory method:
   ```java
   public abstract Button createButton();   // the "hole" subclasses fill
   ```
2. Give `Dialog` a real method that **uses** the factory method's result — this is
   the shared workflow, written once against the `Button` abstraction:
   ```java
   public void renderWindow() {
       Button okButton = createButton();   // doesn't know/care which Button
       okButton.render();
       okButton.onClick();
   }
   ```
3. **`WindowsDialog extends Dialog`** — overrides `createButton()` to return a
   `WindowsButton`.
4. **`MacDialog extends Dialog`** — overrides `createButton()` to return a
   `MacButton`.
5. **`FactoryMethodDemo`** — pick the right `Dialog` once (the only `if` left),
   then call `dialog.renderWindow()`. The client holds a `Dialog` (abstraction)
   and never names a concrete `Button`.

## Done when
- `renderWindow()` works only against the `Button` interface — it never `new`s a
  concrete product.
- The product-selection `if/else` exists in exactly ONE place (choosing the
  Dialog), not scattered through the codebase.
- Adding a `LinuxButton` = new `LinuxButton` + new `LinuxDialog`, with ZERO edits
  to existing dialogs, buttons, or `renderWindow()` (OCP).

## Factory Method vs the others
- **Factory Method:** ONE product, variant chosen by a subclass (one
  `createButton()`).
- **Abstract Factory:** FAMILIES of related products that must stay consistent
  (an object with `createInterior()` AND `createExterior()`). It's literally
  several factory methods bundled together.
- **Builder:** ONE complex object assembled step by step (many optional params).
