/*
 * Quiz data — Open-Closed Principle (OCP).
 * Companion to com.patterns.solid.ocp in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "ocp",
  title: "OCP — Open-Closed",
  group: "SOLID Principles",
  blurb: "Open for extension, closed for modification.",
  questions: [
    {
      prompt: "The Open-Closed Principle states software entities should be...",
      options: [
        "open for modification, closed for extension",
        "open for extension, closed for modification",
        "closed to all changes",
        "open to everyone",
      ],
      correct: 1,
      explanation:
        "Add new behavior by ADDING code (extension), not by EDITING existing, working code (modification).",
    },
    {
      prompt: "An InvoiceDAO with if(type==\"DB\")...else if(\"FILE\") violates OCP because...",
      options: [
        "it uses strings",
        "supporting a new storage type means editing this working method (modification)",
        "it has too few branches",
        "if/else is always illegal",
      ],
      correct: 1,
      explanation:
        "Each new target forces another branch in code that already works, risking the existing branches. That's modification, not extension.",
    },
    {
      prompt: "After refactoring to an InvoiceDAO interface + one impl per target, adding CloudInvoiceDAO requires editing how many EXISTING files?",
      options: ["Zero", "One", "Two", "Every DAO"],
      correct: 0,
      explanation:
        "Zero — CloudInvoiceDAO is a single new file implementing the interface. 'Zero existing edits' is the litmus test for OCP.",
    },
    {
      prompt: "What language mechanism most commonly enables OCP?",
      options: [
        "static methods",
        "polymorphism via interfaces/abstract types",
        "global variables",
        "deep if/else chains",
      ],
      correct: 1,
      explanation:
        "Program to an abstraction and let new implementations plug in. The caller depends on the interface; new behavior arrives as a new implementing class.",
    },
    {
      prompt: "OCP is closely paired with which other SOLID principle?",
      options: [
        "SRP",
        "DIP — depending on abstractions is what makes extension-without-modification possible",
        "ISP",
        "none",
      ],
      correct: 1,
      explanation:
        "DIP (depend on abstractions) is the enabler: because callers depend on an interface, you can substitute/extend implementations freely.",
    },
    {
      prompt: "Which is a sign your code already FOLLOWS OCP?",
      options: [
        "Adding a feature means adding a new class and wiring it in, with no edits to existing classes",
        "Every new feature edits a central switch statement",
        "All classes are final",
        "There are no interfaces anywhere",
      ],
      correct: 0,
      explanation:
        "Extension by addition (new class) rather than modification (editing a switch) is exactly the property OCP describes.",
    },
  ],
});
