/*
 * Quiz data — Singleton Pattern (creational).
 * Companion to com.patterns.creational.singleton in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "singleton",
  title: "Singleton Pattern",
  group: "Creational Design Patterns",
  blurb: "Guarantee a class has exactly one instance with a global access point.",
  questions: [
    {
      prompt: "What does the Singleton pattern guarantee?",
      options: [
        "A class can have at most one subclass",
        "A class has exactly one instance, with a global access point to it",
        "Every method is static",
        "Objects are created lazily by a factory",
      ],
      correct: 1,
      explanation:
        "One instance, shared access. Think app config, a logger, or a connection pool — things you want a single shared copy of.",
    },
    {
      prompt: "Why is the constructor made private in a Singleton?",
      options: [
        "To make it run faster",
        "So outside code cannot call new and create extra instances",
        "Because Java requires it for static methods",
        "To allow subclassing",
      ],
      correct: 1,
      explanation:
        "A private constructor blocks `new AppConfig()` from anywhere else. The class itself becomes the only thing that can create the single instance.",
    },
    {
      prompt: "In lazy initialization, getInstance() creates the instance...",
      options: [
        "when the class is loaded",
        "the first time it is requested (if it doesn't exist yet)",
        "once per thread",
        "every time it is called",
      ],
      correct: 1,
      explanation:
        "Lazy = build on first request: `if (instance == null) instance = new AppConfig();`. Eager initialization instead builds it up front at class-load time.",
    },
    {
      prompt: "Why mark getInstance() (or its critical section) as synchronized?",
      options: [
        "To make it return faster",
        "To prevent two threads from each creating an instance at the same time",
        "To allow multiple instances safely",
        "It has no effect",
      ],
      correct: 1,
      explanation:
        "Without synchronization, two threads can both see instance==null and each create one — breaking the 'exactly one' guarantee. synchronized serializes that check-and-create.",
    },
    {
      prompt: "What is the role of the private static field (e.g. `private static AppConfig instance`)?",
      options: [
        "It holds the one shared instance, reachable from the static getInstance()",
        "It stores each caller's own copy",
        "It is required by all interfaces",
        "It makes the class abstract",
      ],
      correct: 0,
      explanation:
        "static = one slot for the whole class (not per-object), and it's where the single instance is cached so getInstance() can return the same one every time.",
    },
    {
      prompt: "Compared to lazy initialization, EAGER initialization (instance created at class load) is...",
      options: [
        "always thread-unsafe",
        "simpler and inherently thread-safe, but builds the instance even if never used",
        "impossible in Java",
        "slower on every call",
      ],
      correct: 1,
      explanation:
        "Eager (`private static final AppConfig INSTANCE = new AppConfig();`) is created once by the classloader — no synchronization needed — but you pay for it even if it's never used.",
    },
    {
      prompt: "Which of these can BREAK a naive Singleton (allow a second instance)?",
      options: [
        "Calling getInstance() twice",
        "Reflection, deserialization, or cloning",
        "Reading a field on the instance",
        "Declaring the field static",
      ],
      correct: 1,
      explanation:
        "Reflection can call the private constructor; deserialization/cloning can fabricate new objects. An enum singleton resists all three, which is why it's often recommended.",
    },
    {
      prompt: "A common CRITICISM of the Singleton pattern is that it...",
      options: [
        "uses too much memory",
        "introduces hidden global state that makes testing and dependencies harder",
        "cannot hold any fields",
        "requires inheritance",
      ],
      correct: 1,
      explanation:
        "A global access point is essentially a global variable: it hides dependencies and makes unit tests harder to isolate. Often dependency injection is a cleaner alternative.",
    },
  ],
});
