# Factory Method — The Bad Approach

## Naive code (the problem)
The client `new`s up concrete products itself, branching on a type — and repeats
that branch everywhere a button is needed:

```java
// somewhere in the UI code
Button button;
if (os.equals("windows")) {
    button = new WindowsButton();
} else if (os.equals("mac")) {
    button = new MacButton();
} else {
    throw new IllegalStateException("unknown OS");
}
button.render();
button.onClick();

// ...and the SAME if/else gets copy-pasted in every place that builds a button
```

## Why it's bad
- **Tight coupling** — the client names every concrete product class.
- **Open-Closed violation** — adding `LinuxButton` means editing every if/else
  that creates a button, risking the branches that already work.
- **Duplication** — the selection logic is scattered and repeated.

## The fix
Move creation behind an abstract `createButton()` (the factory method) on a
`Dialog` creator; subclasses decide the concrete product. The reusable
`renderWindow()` then works only against the `Button` interface. See
[`Dialog.java`](Dialog.java) and [`UML.md`](UML.md).
