/*
 * Quiz data — Decorator Pattern (structural).
 * Companion to com.patterns.structural.decorator in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "decorator",
  title: "Decorator Pattern",
  group: "Structural Design Patterns",
  blurb: "Attach behavior to an object by wrapping it, stacking features at runtime.",
  questions: [
    {
      prompt: "What does the Decorator pattern let you do?",
      options: [
        "Convert one interface into another",
        "Add behavior to an object dynamically by wrapping it, without changing its class",
        "Ensure only one instance of a class exists",
        "Create families of related products",
      ],
      correct: 1,
      explanation:
        "Decorator wraps an object in another object of the same type that adds behavior, so features can be layered at runtime without editing the wrapped class.",
    },
    {
      prompt: "What problem does Decorator solve compared to subclassing every combination?",
      options: [
        "Slow startup time",
        "Class explosion — needing a separate class for every base x feature combination",
        "Memory leaks",
        "Thread safety",
      ],
      correct: 1,
      explanation:
        "Without it you'd need MasalaDosa, CheeseMasalaDosa, GheeCheeseMasalaDosa, ... — every combination. Decorators are small wrappers you stack, so combinations are built at runtime instead of pre-declared.",
    },
    {
      prompt: "A concrete decorator (e.g. Cheese) is BOTH...",
      options: [
        "abstract and final",
        "is-a Component (implements the interface) AND has-a Component (holds the wrapped object)",
        "a singleton and a factory",
        "a base component and a client",
      ],
      correct: 1,
      explanation:
        "The dual nature IS the pattern. 'is-a' lets a decorator stand in for the component (so it can be wrapped again); 'has-a' lets it add to whatever it wraps.",
    },
    {
      prompt: "Which property of a decorator makes `new Ghee(new Cheese(new PlainDosa()))` possible — wrapping a decorator inside another decorator?",
      options: [
        "That it HAS-A Dosa field",
        "That it IS-A Dosa (implements the component interface), so it fits anywhere a Dosa is expected",
        "That it is abstract",
        "That it is in the same package",
      ],
      correct: 1,
      explanation:
        "Because Cheese is-a Dosa, Ghee's constructor (which takes a Dosa) accepts it. If a decorator weren't the component type, you could wrap a base only once and never stack.",
    },
    {
      prompt: "In getCost(), what does a concrete decorator typically return?",
      options: [
        "Only its own added cost",
        "wrapped.getCost() + its own added cost",
        "A hardcoded total",
        "Zero, and lets the base compute everything",
      ],
      correct: 1,
      explanation:
        "Each layer adds its bit to the wrapped object's cost. The call recurses inward until the base component returns its price, then the extras add up on the way out.",
    },
    {
      prompt: "When computing the total cost of a stack of decorators, what stops the recursion?",
      options: [
        "A null check in the decorator",
        "The base concrete component (e.g. PlainDosa) — it holds no wrapped object and just returns its own cost",
        "A counter that limits depth",
        "The client manually summing values",
      ],
      correct: 1,
      explanation:
        "The base component is the base case: it has no inner component to delegate to, so it returns its own value directly. That value then bubbles up through each decorator layer.",
    },
    {
      prompt: "Why is the decorator base class (e.g. DosaDecorator) usually abstract?",
      options: [
        "To make it run faster",
        "Because on its own it adds no behavior — it's only shared machinery (the wrapped field + delegation) for real decorators to extend, and should never be instantiated directly",
        "Because Java requires wrapper classes to be abstract",
        "To make it a singleton",
      ],
      correct: 1,
      explanation:
        "A bare DosaDecorator would be a 'topping that tops nothing'. Marking it abstract turns that meaningless instantiation into a compile error and signals it exists only to be subclassed.",
    },
    {
      prompt: "Adding a new topping (e.g. Paneer) requires...",
      options: [
        "Editing every existing dosa and topping class",
        "One new decorator class, with zero edits to components, existing decorators, or the client",
        "A new field in the base component plus an edit to getCost()",
        "Recompiling the client with new constructor overloads",
      ],
      correct: 1,
      explanation:
        "Open-Closed Principle: a new feature is a new decorator class. Contrast the boolean-flag approach, where every new option forces an edit to the component's getCost().",
    },
    {
      prompt: "Decorator vs Adapter — the key difference in intent is:",
      options: [
        "Decorator changes the interface; Adapter adds behavior",
        "Decorator keeps the SAME interface and ADDS behavior; Adapter CHANGES one interface into another and adds no new behavior",
        "They are identical",
        "Decorator is creational; Adapter is behavioral",
      ],
      correct: 1,
      explanation:
        "Both wrap an object, but for opposite reasons: a decorator enriches while preserving the type (so it stays stackable); an adapter translates between incompatible types.",
    },
    {
      prompt: "When is Decorator the right choice?",
      options: [
        "When you need exactly one shared instance",
        "When responsibilities should be added to individual objects dynamically and transparently, in combinations decided at runtime",
        "When you must make two incompatible interfaces work together",
        "When object creation is expensive and you want to clone",
      ],
      correct: 1,
      explanation:
        "Reach for it when features are optional, combinable, and chosen at runtime — and subclassing every combination would be unwieldy.",
    },
  ],
});
