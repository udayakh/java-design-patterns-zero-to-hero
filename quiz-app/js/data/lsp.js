/*
 * Quiz data — Liskov Substitution Principle (LSP).
 * Companion to com.patterns.solid.lsp in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "lsp",
  title: "LSP — Liskov Substitution",
  group: "SOLID Principles",
  blurb: "Subtypes must be usable anywhere their base type is expected.",
  questions: [
    {
      prompt: "The Liskov Substitution Principle requires that...",
      options: [
        "subclasses add no new methods",
        "a subtype can replace its supertype without breaking the program",
        "all classes share one interface",
        "base classes be abstract",
      ],
      correct: 1,
      explanation:
        "Code written against the base type must keep working when handed any subtype. The subtype must honor the base's contract.",
    },
    {
      prompt: "A Bicycle that implements Bike.turnOnEngine() by throwing UnsupportedOperationException violates LSP because...",
      options: [
        "throwing is slow",
        "a caller holding a Bike can legally call turnOnEngine() and a Bicycle will break it",
        "Bicycle has no fields",
        "Bike is an interface",
      ],
      correct: 1,
      explanation:
        "turnOnEngine() is a legal call on the Bike type. The subtype narrowed the contract, so it's not safely substitutable — the LSP violation.",
    },
    {
      prompt: "What is the TEST for an LSP violation?",
      options: [
        "the subclass compiles",
        "substituting the subtype for the base surprises or breaks the caller",
        "the subclass has more methods",
        "the class name ends in 'Impl'",
      ],
      correct: 1,
      explanation:
        "Ask: can this subtype stand in everywhere the base is used, with no surprises? If a base-typed caller can break, LSP is violated.",
    },
    {
      prompt: "The clean fix for the Bike/Bicycle problem is to...",
      options: [
        "make turnOnEngine() empty in Bicycle",
        "add instanceof checks before calling engine methods",
        "split out an EnginePowered interface so only engine vehicles implement it",
        "make Bicycle extend Motorcycle",
      ],
      correct: 2,
      explanation:
        "Keep only universal behavior on Bike (accelerate); put turnOnEngine() on a separate EnginePowered interface. Bicycle implements just Bike and never lies.",
    },
    {
      prompt: "LSP violations most often reveal a misuse of...",
      options: [
        "inheritance / an 'is-a' relationship that isn't really true",
        "static methods",
        "generics",
        "enums",
      ],
      correct: 0,
      explanation:
        "Forcing a subtype into an 'is-a' it can't fully satisfy is the root cause. The fix is usually re-shaping the type hierarchy / interfaces.",
    },
    {
      prompt: "Which is a classic LSP rule about method contracts in subtypes?",
      options: [
        "subtypes may strengthen preconditions freely",
        "subtypes must not strengthen preconditions or weaken postconditions of the base",
        "subtypes may throw any new exception",
        "subtypes must remove methods",
      ],
      correct: 1,
      explanation:
        "A subtype that demands MORE (stronger precondition) or delivers LESS (weaker postcondition) than the base breaks substitutability for existing callers.",
    },
  ],
});
