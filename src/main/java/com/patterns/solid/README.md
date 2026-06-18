# SOLID Principles — Practice Lab

One sub-package per principle. Each contains **deliberately bad code** plus a
`TASK.md`. Your job: refactor the bad code so it satisfies the principle.
Don't delete the bad version's intent — keep the same behavior, fix the design.

| Pkg   | Principle              | One-liner                                                        |
|-------|------------------------|------------------------------------------------------------------|
| `srp` | Single Responsibility  | A class should have only one reason to change.                   |
| `ocp` | Open-Closed            | Open for extension, closed for modification.                     |
| `lsp` | Liskov Substitution    | Subtypes must be substitutable for their base type.              |
| `isp` | Interface Segregation  | No client forced to depend on methods it doesn't use.            |
| `dip` | Dependency Inversion   | Depend on abstractions, not concretions.                         |

## Workflow
1. Pick a package, read its `TASK.md`.
2. Refactor the bad code in place (add new files as needed).
3. Ping me — I review against the specific principle and tell you what still leaks.

Suggested order: `srp` → `ocp` → `lsp` → `isp` → `dip` (same as the video).
