# Abstract Factory — UML

```mermaid
classDiagram
    class CarInterior {
        <<interface>>
        +addInteriorComponents() void
    }
    class CarExterior {
        <<interface>>
        +addExteriorComponents() void
    }
    class CarFactory {
        <<interface>>
        +createInterior() CarInterior
        +createExterior() CarExterior
    }
    class EconomyCarFactory {
        +createInterior() CarInterior
        +createExterior() CarExterior
    }
    class LuxuryCarFactory {
        +createInterior() CarInterior
        +createExterior() CarExterior
    }
    class SportsCarFactory {
        +createInterior() CarInterior
        +createExterior() CarExterior
    }
    class CarFactoryProvider {
        +static getCarFactory(String type) CarFactory
    }

    CarInterior <|.. EconomyCarInterior
    CarInterior <|.. LuxuryCarInterior
    CarInterior <|.. SportsCarInterior
    CarExterior <|.. EconomyCarExterior
    CarExterior <|.. LuxuryCarExterior
    CarExterior <|.. SportsCarExterior

    CarFactory <|.. EconomyCarFactory
    CarFactory <|.. LuxuryCarFactory
    CarFactory <|.. SportsCarFactory

    CarFactory ..> CarInterior : creates
    CarFactory ..> CarExterior : creates
    CarFactoryProvider ..> CarFactory : returns
```

## Roles
| GoF role | Class(es) |
|----------|-----------|
| Abstract Products | `CarInterior`, `CarExterior` |
| Concrete Products | `Economy/Luxury/Sports` × `Interior/Exterior` |
| Abstract Factory | `CarFactory` |
| Concrete Factories | `EconomyCarFactory`, `LuxuryCarFactory`, `SportsCarFactory` |
| Factory Provider (optional) | `CarFactoryProvider` |

## Key points
- Each concrete factory produces a **whole consistent family** — `EconomyCarFactory`
  returns only Economy products, so mixing families (economy interior + luxury
  exterior) is impossible to express.
- The factory bundles **multiple** factory methods (`createInterior` + `createExterior`);
  that's the distinction from Factory Method, which has just one.
- New family = new products + one new factory, **zero edits** to existing code (OCP).
- The client depends only on the `CarFactory`/product interfaces (DIP).
