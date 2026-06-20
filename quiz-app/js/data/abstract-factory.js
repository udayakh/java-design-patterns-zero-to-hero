/*
 * Quiz data — Abstract Factory Pattern (creational).
 * Companion to com.patterns.creational.abstractfactory in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "abstract-factory",
  title: "Abstract Factory Pattern",
  group: "Creational Design Patterns",
  blurb: "Create families of related objects without naming their concrete classes.",
  questions: [
    {
      prompt: "What does the Abstract Factory pattern provide?",
      options: [
        "A single method to build one product",
        "An interface for creating families of related objects without specifying their concrete classes",
        "A way to clone existing objects",
        "A global single instance",
      ],
      correct: 1,
      explanation:
        "Abstract Factory creates whole FAMILIES of related products (e.g. a car's interior + exterior) through one factory, with the client depending only on interfaces.",
    },
    {
      prompt: "Abstract Factory is often nicknamed...",
      options: [
        "the Singleton of factories",
        "a 'factory of factories' / super factory",
        "the cloning factory",
        "the lazy factory",
      ],
      correct: 1,
      explanation:
        "It groups multiple factory methods, each producing a product type, so it behaves like a factory that yields a family of products — a 'factory of factories'.",
    },
    {
      prompt: "How does bundling createInterior() and createExterior() into ONE EconomyCarFactory guarantee consistency?",
      options: [
        "It runs faster",
        "A single factory only ever returns same-family products, so an economy interior + luxury exterior mismatch becomes impossible to express",
        "It uses less memory",
        "It validates types at runtime with instanceof",
      ],
      correct: 1,
      explanation:
        "Because one factory makes both products, you can't accidentally mix families. The consistency is enforced structurally, not by runtime checks.",
    },
    {
      prompt: "In the car example, what are CarInterior and CarExterior?",
      options: [
        "Concrete factories",
        "Abstract product interfaces — the product types in the family",
        "The client classes",
        "Enums",
      ],
      correct: 1,
      explanation:
        "CarInterior/CarExterior are abstract products. EconomyCarInterior, LuxuryCarExterior, etc. are concrete products; CarFactory is the abstract factory.",
    },
    {
      prompt: "Adding a new Sports family (interior + exterior + factory) requires editing which existing factories?",
      options: ["All of them", "Only CarFactory", "Zero — you add new classes only", "The client only"],
      correct: 2,
      explanation:
        "Open-Closed Principle: a new family is new products + one new SportsCarFactory implementing CarFactory. Existing factories and the client stay untouched.",
    },
    {
      prompt: "What is the role of a Factory Provider (e.g. CarFactoryProvider)?",
      options: [
        "It builds the products directly",
        "It returns the right concrete factory based on client input, centralizing the 'which family' decision",
        "It stores a single instance",
        "It clones factories",
      ],
      correct: 1,
      explanation:
        "The provider maps a request (e.g. a CarType) to a concrete factory, so the one place that picks a family is isolated; the client then uses the factory abstraction.",
    },
    {
      prompt: "Factory Method vs Abstract Factory — the key difference is:",
      options: [
        "Factory Method makes ONE product (many variants); Abstract Factory makes FAMILIES of related products",
        "They are identical",
        "Abstract Factory is behavioral",
        "Factory Method cannot be subclassed",
      ],
      correct: 0,
      explanation:
        "One product type with variants → Factory Method (one createX). Multiple related product types grouped by family → Abstract Factory (several createX bundled).",
    },
    {
      prompt: "When should you reach for Abstract Factory?",
      options: [
        "When you need exactly one instance of a class",
        "When you must create groups of related products that should be used together (by theme, platform, brand, etc.)",
        "When object creation is cheap and trivial",
        "When you only ever build one kind of object",
      ],
      correct: 1,
      explanation:
        "It shines when products come in families that must stay compatible — switching the whole family at runtime by swapping the factory.",
    },
  ],
});
