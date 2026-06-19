/*
 * Quiz data — Dependency Inversion Principle (DIP).
 * Companion to com.patterns.solid.dip in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "dip",
  title: "DIP — Dependency Inversion",
  group: "SOLID Principles",
  blurb: "Depend on abstractions, not on concrete implementations.",
  questions: [
    {
      prompt: "The Dependency Inversion Principle says high-level modules should depend on...",
      options: [
        "low-level concrete classes",
        "abstractions, not concretions",
        "global state",
        "the operating system",
      ],
      correct: 1,
      explanation:
        "Both high- and low-level modules should depend on abstractions (interfaces), not on each other's concrete details.",
    },
    {
      prompt: "A MacBook that does `this.keyboard = new WiredKeyboard()` in its constructor violates DIP because...",
      options: [
        "the constructor is public",
        "the high-level MacBook is welded to a low-level concrete class",
        "WiredKeyboard is too small",
        "it uses a field",
      ],
      correct: 1,
      explanation:
        "MacBook (policy) hard-codes a concrete dependency (detail). You can't give it a Bluetooth keyboard without editing MacBook.",
    },
    {
      prompt: "The DIP fix is to have MacBook depend on a Keyboard interface and...",
      options: [
        "read a config file to pick the keyboard",
        "receive the Keyboard via its constructor (dependency injection)",
        "make Keyboard a subclass of MacBook",
        "use a static keyboard",
      ],
      correct: 1,
      explanation:
        "Constructor injection: `new MacBook(keyboard, mouse)`. MacBook holds the abstraction; the caller supplies the concretion.",
    },
    {
      prompt: "Why is injecting the dependency better than MacBook choosing the concrete keyboard itself?",
      options: [
        "it runs faster",
        "the caller decides the implementation, so MacBook never changes to support a new keyboard",
        "it avoids interfaces",
        "it uses less memory",
      ],
      correct: 1,
      explanation:
        "Injection pushes the 'which concretion' choice out to main(). MacBook depends only on Keyboard, so wired vs bluetooth needs zero MacBook edits (also OCP).",
    },
    {
      prompt: "What exactly is 'inverted' in Dependency Inversion?",
      options: [
        "the order methods run",
        "the direction of the dependency: instead of high-level depending on low-level, both depend on an abstraction",
        "the class hierarchy is flipped upside down",
        "the constructor parameters are reversed",
      ],
      correct: 1,
      explanation:
        "Traditionally high-level code depends on low-level code. DIP inverts that: the low-level detail now conforms to an abstraction owned by/ shared with the high-level policy.",
    },
    {
      prompt: "DIP is the principle most directly behind which technique/pattern?",
      options: [
        "dependency injection (and patterns like Strategy, Factory Method)",
        "bubble sort",
        "the Singleton's private constructor",
        "recursion",
      ],
      correct: 0,
      explanation:
        "Dependency injection is DIP in practice. Strategy and Factory Method also rely on it: the client holds an abstraction while something else supplies the concrete type.",
    },
  ],
});
