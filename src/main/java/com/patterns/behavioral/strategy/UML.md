# Strategy — UML

```mermaid
classDiagram
    class DriveStrategy {
        <<interface>>
        +drive() void
    }
    class NormalDrive { +drive() void }
    class SportsDrive { +drive() void }
    class OffRoadDrive { +drive() void }

    class Vehicle {
        -DriveStrategy driveStrategy
        +Vehicle(DriveStrategy strategy)
        +drive() void
        +setDriveStrategy(DriveStrategy strategy) void
    }
    class SportsVehicle
    class OffRoadVehicle
    class PassengerVehicle

    DriveStrategy <|.. NormalDrive
    DriveStrategy <|.. SportsDrive
    DriveStrategy <|.. OffRoadDrive
    Vehicle o--> DriveStrategy : delegates drive()
    Vehicle <|-- SportsVehicle
    Vehicle <|-- OffRoadVehicle
    Vehicle <|-- PassengerVehicle
```

## Roles
| GoF role | Class(es) |
|----------|-----------|
| Strategy (interface) | `DriveStrategy` |
| Concrete Strategies | `NormalDrive`, `SportsDrive`, `OffRoadDrive` |
| Context | `Vehicle` (and subtypes) |

## Key points
- `Vehicle` **holds a `DriveStrategy` field** (composition `o-->`) and `drive()` delegates to it — it does not implement driving itself.
- Because the algorithm is a field, `setDriveStrategy()` can swap it **at runtime** — the defining Strategy capability.
- Subclasses just supply a default strategy via `super(...)`; they no longer override `drive()`.
- New behavior = new `DriveStrategy` implementation, zero edits elsewhere (OCP).
