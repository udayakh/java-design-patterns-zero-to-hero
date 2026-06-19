/*
 * Quiz data — Strategy Pattern (behavioral).
 * Companion to com.patterns.behavioral.strategy in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "strategy",
  title: "Strategy Pattern",
  group: "Behavioral Design Patterns",
  blurb: "Encapsulate interchangeable algorithms and swap them — even at runtime.",
  questions: [
    {
      prompt: "Strategy is classified as which kind of design pattern?",
      options: ["Creational", "Structural", "Behavioral", "Concurrency"],
      correct: 2,
      explanation:
        "Behavioral — it's about how objects choose and run an algorithm at runtime, not about how they're created or composed structurally.",
    },
    {
      prompt: "What two problems does Strategy fix in the 'Vehicle with overridden drive()' design?",
      options: [
        "Slow performance and high memory use",
        "Code duplication and tight coupling",
        "Null pointers and type errors",
        "Thread safety and deadlocks",
      ],
      correct: 1,
      explanation:
        "When SportsVehicle and OffRoadVehicle copy-paste the same drive() override, you get duplication; baking the algorithm into the class hierarchy is the tight coupling. Strategy removes both.",
    },
    {
      prompt: "In Strategy, the varying behavior (e.g. how a vehicle drives) is captured as...",
      options: [
        "a subclass of Vehicle",
        "a method overridden in each vehicle",
        "a DriveStrategy interface with interchangeable implementations",
        "a boolean flag on Vehicle",
      ],
      correct: 2,
      explanation:
        "The algorithm family lives behind an interface (DriveStrategy) with concrete strategies (NormalDrive, SportsDrive). Each algorithm exists in exactly one place.",
    },
    {
      prompt: "How does Vehicle execute its driving behavior after applying Strategy?",
      options: [
        "It overrides drive() in each subclass",
        "It holds a DriveStrategy field and delegates: driveStrategy.drive()",
        "It uses a switch statement on vehicle type",
        "It hard-codes the behavior in a static method",
      ],
      correct: 1,
      explanation:
        "Vehicle keeps a DriveStrategy reference and forwards to it. Subclasses no longer override drive(); they just supply the strategy they want.",
    },
    {
      prompt: "The feature that makes Strategy unique (vs. just choosing behavior at construction) is...",
      options: [
        "it compiles faster",
        "you can change the algorithm on a live object at runtime",
        "it avoids using interfaces",
        "it works without any classes",
      ],
      correct: 1,
      explanation:
        "Because behavior lives in a FIELD, a setter (setDriveStrategy) can swap it on an existing object — same car, new driving behavior. An overridden method could never do that.",
    },
    {
      prompt: "Why can a field-based strategy be swapped at runtime, but an overridden method cannot?",
      options: [
        "Fields are stored on disk",
        "A method override is fixed by the object's class at creation; a field can be reassigned anytime",
        "Overridden methods are private",
        "Fields are always static",
      ],
      correct: 1,
      explanation:
        "An override is bound to the concrete type the moment the object is created. A strategy field is just a reference you can point at a different implementation whenever you like.",
    },
    {
      prompt: "Adding a brand-new BoatDrive strategy requires editing which existing classes?",
      options: [
        "Vehicle and every subclass",
        "Only the DriveStrategy interface",
        "None — you just add a new class implementing DriveStrategy",
        "The main method only",
      ],
      correct: 2,
      explanation:
        "That's the Open-Closed Principle: a new strategy is a new file implementing DriveStrategy. Existing code is untouched — Strategy is OCP applied to algorithms.",
    },
    {
      prompt: "Strategy and Factory Method share the same skeleton (depend on an abstraction). The key DIFFERENCE is what they swap:",
      options: [
        "Strategy swaps which object you create; Factory Method swaps which algorithm you run",
        "Strategy swaps which algorithm you run; Factory Method swaps which object you create",
        "They are identical",
        "Strategy is creational; Factory Method is behavioral",
      ],
      correct: 1,
      explanation:
        "Factory Method (creational) varies the concrete OBJECT produced. Strategy (behavioral) varies the ALGORITHM executed. Same DIP/OCP backbone, different thing being made interchangeable.",
    },
  ],
});
