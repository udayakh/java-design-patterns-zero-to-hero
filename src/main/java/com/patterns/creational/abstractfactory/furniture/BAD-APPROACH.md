# Abstract Factory (Furniture) — The Bad Approach

## Scenario
A furniture shop sells items in matching **styles**: `Modern` and `Victorian`.
Every order should be **style-consistent** — a Modern chair belongs with a Modern
sofa, never a Victorian one. The ordering code builds the pieces directly.

## Naive code (the problem)
```java
public class FurnitureOrder {

    public void buildLivingRoom(String style) {
        Chair chair;
        Sofa sofa;

        if (style.equals("modern")) {
            chair = new ModernChair();
            sofa  = new ModernSofa();
        } else if (style.equals("victorian")) {
            chair = new VictorianChair();
            sofa  = new ModernSofa();      // <-- OOPS: Victorian chair + Modern sofa
        } else {
            throw new IllegalStateException("unknown style");
        }

        chair.sitOn();
        sofa.lieOn();
    }
}
```

## Why it's bad
- **No family guarantee** — nothing stops mixing a `VictorianChair` with a
  `ModernSofa`. The bug above is a one-character typo and the compiler is happy.
- **Tight coupling** — `FurnitureOrder` names every concrete product
  (`ModernChair`, `VictorianSofa`, ...) and `new`s them.
- **Open-Closed violation** — adding an `ArtDeco` style means editing this
  `if/else` (and every copy of it).
- **Duplication** — the "pick a style, build each piece" logic is repeated
  everywhere furniture is created.

## The fix
Provide a **factory per family**: one `FurnitureFactory` that produces a whole
consistent set (`createChair()` AND `createSofa()`). A single factory can only
ever yield one style — mixing families becomes *impossible to express*.
See [`TASK.md`](TASK.md).
