/*
 * Quiz data — Interface Segregation Principle (ISP).
 * Companion to com.patterns.solid.isp in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "isp",
  title: "ISP — Interface Segregation",
  group: "SOLID Principles",
  blurb: "No client should be forced to depend on methods it doesn't use.",
  questions: [
    {
      prompt: "The Interface Segregation Principle says...",
      options: [
        "every interface must have one method",
        "no client should be forced to depend on methods it does not use",
        "interfaces should never be split",
        "classes should avoid interfaces",
      ],
      correct: 1,
      explanation:
        "Prefer many small, role-specific interfaces over one fat interface that forces clients to implement irrelevant methods.",
    },
    {
      prompt: "A fat RestaurantEmployee interface forces a Waiter to implement cookFood() and doMaintenance(). The smell is...",
      options: [
        "the Waiter class is too short",
        "empty / meaningless method bodies just to satisfy the interface",
        "too many constructors",
        "missing getters",
      ],
      correct: 1,
      explanation:
        "Waiter implements cookFood() with an empty body — a method it doesn't use. Those dead implementations signal the interface is too broad.",
    },
    {
      prompt: "The ISP fix for the fat RestaurantEmployee interface is to...",
      options: [
        "delete the Waiter class",
        "split it into role interfaces (WaiterTask, ChefTask, MaintenanceTask)",
        "make every method static",
        "add more methods to it",
      ],
      correct: 1,
      explanation:
        "Small role interfaces let each class implement only what it actually does — Waiter implements only WaiterTask.",
    },
    {
      prompt: "Under ISP, a Manager who serves customers AND does maintenance should...",
      options: [
        "implement one giant interface",
        "implement two small interfaces: WaiterTask and MaintenanceTask",
        "extend both Waiter and Maintenance",
        "have empty methods for unused jobs",
      ],
      correct: 1,
      explanation:
        "Small interfaces COMPOSE — a multi-role class picks exactly the roles it needs. That flexibility is impossible with one fat interface.",
    },
    {
      prompt: "ISP and LSP can produce the same smell (empty/throwing methods). The DIFFERENCE in root cause is...",
      options: [
        "they are identical",
        "LSP = the subtype lies about behavior; ISP = the interface is simply too big",
        "ISP is about performance",
        "LSP is about interfaces only",
      ],
      correct: 1,
      explanation:
        "Same symptom, different diagnosis: LSP is a broken behavioral contract; ISP is an over-broad interface forcing unused methods.",
    },
    {
      prompt: "ISP is NOT the same as 'one method per interface'. It actually means...",
      options: [
        "interfaces should be cohesive to a role, exposing only what that role's clients need",
        "every interface must be empty",
        "never use more than one interface",
        "interfaces must have exactly one method",
      ],
      correct: 0,
      explanation:
        "An interface can have several related methods — as long as they form one cohesive role. The goal is no client forced to depend on the irrelevant.",
    },
  ],
});
