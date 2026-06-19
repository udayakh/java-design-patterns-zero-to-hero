/*
 * Quiz data — Factory Method Pattern (creational).
 * Companion to com.patterns.creational.factorymethod in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "factory-method",
  title: "Factory Method Pattern",
  group: "Creational Design Patterns",
  blurb: "Defer object creation to subclasses via an overridable creation method.",
  questions: [
    {
      prompt: "Factory Method is which category of design pattern?",
      options: ["Behavioral", "Structural", "Creational", "Concurrency"],
      correct: 2,
      explanation:
        "Creational — it's about HOW objects are created, specifically letting subclasses decide which concrete class to instantiate.",
    },
    {
      prompt: "The core idea of Factory Method is to...",
      options: [
        "create all objects in one giant switch statement",
        "define a method for creating an object, but let subclasses decide which class to instantiate",
        "make every constructor public",
        "cache objects to reuse them",
      ],
      correct: 1,
      explanation:
        "A creator class declares an abstract createX() method; each subclass overrides it to return its own concrete product. The base class works only with the product interface.",
    },
    {
      prompt: "In a Dialog/Button example, why is createButton() declared abstract on Dialog instead of using an if/else on the OS?",
      options: [
        "Abstract methods run faster",
        "So a new platform = a new Dialog subclass, with zero edits to existing creators (OCP)",
        "Java forbids if/else in creators",
        "To avoid writing interfaces",
      ],
      correct: 1,
      explanation:
        "The abstract factory method is the extension point. Adding MacDialog/MacButton requires no edits to Dialog or WindowsDialog — Open-Closed at the creation site.",
    },
    {
      prompt: "In Factory Method terminology, the Button interface and WindowsButton class are the...",
      options: ["Creators", "Products", "Clients", "Singletons"],
      correct: 1,
      explanation:
        "Button is the Product interface; WindowsButton/MacButton are concrete products. Dialog is the Creator; WindowsDialog/MacDialog are concrete creators.",
    },
    {
      prompt: "A method like Dialog.renderWindow() that calls createButton() then button.render() depends on...",
      options: [
        "the concrete WindowsButton type",
        "only the Button abstraction (it never names a concrete button)",
        "a global registry",
        "the operating system API directly",
      ],
      correct: 1,
      explanation:
        "That's DIP in action: the creator's logic uses only the Button interface, so it works for any product its subclasses produce.",
    },
    {
      prompt: "How does Factory Method differ from a 'Simple Factory' (a single class with a switch on type)?",
      options: [
        "They are identical",
        "Factory Method uses subclassing/polymorphism for the choice; a simple factory centralizes it in one switch you must edit",
        "Simple Factory uses inheritance; Factory Method uses a switch",
        "Factory Method cannot create objects",
      ],
      correct: 1,
      explanation:
        "Simple Factory (not an official GoF pattern) concentrates the if/else in one method you keep editing. Factory Method distributes the decision across subclasses, so extension means adding a class.",
    },
    {
      prompt: "How does Factory Method differ from Abstract Factory?",
      options: [
        "Factory Method creates ONE product via subclassing; Abstract Factory creates FAMILIES of related products",
        "They are the same pattern",
        "Abstract Factory is behavioral",
        "Factory Method cannot be overridden",
      ],
      correct: 0,
      explanation:
        "Factory Method = one overridable method making one product. Abstract Factory = an object with several factory methods producing a whole family of related products (e.g. Button + Checkbox + Menu).",
    },
    {
      prompt: "Factory Method primarily helps you follow which SOLID principles?",
      options: [
        "SRP and ISP",
        "OCP (extend with new subclasses) and DIP (depend on the product interface)",
        "LSP only",
        "None — it violates SOLID",
      ],
      correct: 1,
      explanation:
        "Same backbone you saw in Strategy/Observer: depend on an abstraction (DIP) and add new behavior by adding classes, not editing old ones (OCP).",
    },
  ],
});
