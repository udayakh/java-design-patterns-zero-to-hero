/*
 * Quiz data — Single Responsibility Principle (SRP).
 * Companion to com.patterns.solid.srp in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "srp",
  title: "SRP — Single Responsibility",
  group: "SOLID Principles",
  blurb: "A class should have only one reason to change.",
  questions: [
    {
      prompt: "The Single Responsibility Principle says a class should have...",
      options: [
        "only one method",
        "only one reason to change",
        "only one field",
        "only one instance",
      ],
      correct: 1,
      explanation:
        "One REASON to change = one responsibility. Not one method — a class can have many methods that all serve a single responsibility.",
    },
    {
      prompt: "An Invoice class that calculates totals, saves to a database, AND prints itself violates SRP because it has...",
      options: [
        "too many fields",
        "three reasons to change: business rules, persistence, and presentation",
        "no interface",
        "a public constructor",
      ],
      correct: 1,
      explanation:
        "A DB change, a print-format change, or a tax-rule change would each force edits to the same class. Three axes of change = three responsibilities.",
    },
    {
      prompt: "When splitting Invoice into Invoice + InvoiceDAO + InvoicePrinter, how should the DAO/Printer get the invoice?",
      options: [
        "by extending Invoice",
        "by receiving an Invoice as a parameter (composition)",
        "by creating a new Invoice internally",
        "from a global variable",
      ],
      correct: 1,
      explanation:
        "Composition: save(Invoice) / print(Invoice). A printer is-NOT-an invoice, so inheritance is wrong and leaves the responsibility welded to the data class.",
    },
    {
      prompt: "After applying SRP, which method correctly STAYS on the Invoice class itself?",
      options: [
        "saveToDatabase()",
        "printInvoice()",
        "calculateTotal()",
        "sendEmail()",
      ],
      correct: 2,
      explanation:
        "calculateTotal() operates purely on the invoice's own data — it's the data's behavior, not a separate responsibility. Persistence and presentation are what get extracted.",
    },
    {
      prompt: "A key practical BENEFIT of following SRP is that...",
      options: [
        "code runs faster at runtime",
        "changes are localized — a change to printing can't break persistence",
        "you need fewer classes overall",
        "you never need interfaces",
      ],
      correct: 1,
      explanation:
        "Separated responsibilities mean a change touches one small class, reducing the blast radius and making each piece easier to test in isolation.",
    },
    {
      prompt: "Which is the BEST description of a 'responsibility' in SRP?",
      options: [
        "a single line of code",
        "an axis of change — one source/reason that would cause the class to be modified",
        "a private method",
        "a design pattern",
      ],
      correct: 1,
      explanation:
        "Responsibility = a reason to change, often tied to a stakeholder or concern (business logic vs DBA vs UI). Group code by who/what drives its change.",
    },
  ],
});
