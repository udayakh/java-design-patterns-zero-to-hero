# DIP — The Bad Approach

## Naive code (the problem)
The high-level `MacBook` `new`s up low-level concrete devices inside itself:

```java
public class MacBook {
    private final WiredKeyboard keyboard;
    private final WiredMouse mouse;

    public MacBook() {
        this.keyboard = new WiredKeyboard();   // hard-wired concretions
        this.mouse = new WiredMouse();
    }

    public void use() {
        keyboard.type();
        mouse.click();
    }
}
```

## Why it's bad
- **Policy welded to detail** — `MacBook` (high-level) depends directly on the
  concrete `WiredKeyboard`/`WiredMouse` (low-level).
- You can't give it a Bluetooth keyboard without editing `MacBook`.

## The fix
Depend on `Keyboard`/`Mouse` abstractions and inject the concretions through the
constructor (`new MacBook(keyboard, mouse)`). The caller chooses wired vs
bluetooth; `MacBook` never changes. See [`TASK.md`](TASK.md).
