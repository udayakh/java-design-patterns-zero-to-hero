# Factory Method — UML

```mermaid
classDiagram
    class Button {
        <<interface>>
        +onClick() void
        +render() void
    }
    class WindowsButton {
        +onClick() void
        +render() void
    }
    class MacButton {
        +onClick() void
        +render() void
    }
    class Dialog {
        <<abstract>>
        +createButton()* Button
        +renderWindow() void
    }
    class WindowsDialog {
        +createButton() Button
    }
    class MacDialog {
        +createButton() Button
    }

    Button <|.. WindowsButton
    Button <|.. MacButton
    Dialog <|-- WindowsDialog
    Dialog <|-- MacDialog
    Dialog ..> Button : renderWindow() uses
    WindowsDialog ..> WindowsButton : createButton() returns
    MacDialog ..> MacButton : createButton() returns
```

## Roles
| GoF role | Class(es) |
|----------|-----------|
| Product (interface) | `Button` |
| Concrete Products | `WindowsButton`, `MacButton` |
| Creator (abstract) | `Dialog` |
| Concrete Creators | `WindowsDialog`, `MacDialog` |

## Key points
- `createButton()` is the **factory method** (abstract) — subclasses decide which concrete product to instantiate.
- `renderWindow()` is concrete logic that depends only on the `Button` abstraction (DIP); it never names a concrete button.
- New platform = new Product + new Creator, **zero edits** to existing code (OCP).
