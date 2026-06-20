/*
 * Quiz data — Observer Pattern (behavioral).
 * Companion to com.patterns.behavioral.observer in java-design-patterns.
 *
 * Question shape:
 *   { prompt, options: [..], correct: <0-based index>, explanation }
 */
window.DSA_QUIZZES = window.DSA_QUIZZES || [];
window.DSA_QUIZZES.push({
  id: "observer",
  title: "Observer Pattern",
  group: "Behavioral Design Patterns",
  blurb: "A subject notifies a list of observers automatically when its state changes.",
  questions: [
    {
      prompt: "The Observer pattern is used to...",
      options: [
        "create exactly one instance of a class",
        "let a subject automatically notify dependent objects when its state changes",
        "choose an algorithm at runtime",
        "build objects step by step",
      ],
      correct: 1,
      explanation:
        "A one-to-many dependency: when the subject (publisher) changes, all registered observers (subscribers) are notified automatically.",
    },
    {
      prompt: "In the WeatherStation example, what are the Subject and the Observers?",
      options: [
        "Subject = PhoneDisplay; Observers = WeatherStation",
        "Subject = WeatherStation; Observers = PhoneDisplay, TVDisplay",
        "Subject and Observers are the same class",
        "There is no subject",
      ],
      correct: 1,
      explanation:
        "WeatherStation is the Subject that holds state (temperature); the displays are Observers that react via update().",
    },
    {
      prompt: "Why does WeatherStation hold a List<Observer> rather than List<PhoneDisplay>?",
      options: [
        "Lists of interfaces are faster",
        "So it can hold ANY observer type (TV, Web, ...) and stay decoupled from concrete displays",
        "Java forbids List<PhoneDisplay>",
        "To save memory",
      ],
      correct: 1,
      explanation:
        "Depending on the Observer abstraction (DIP) lets the station notify any subscriber type. List<PhoneDisplay> would couple it to one concrete class.",
    },
    {
      prompt: "What does notifyObservers() do?",
      options: [
        "creates new observers",
        "loops the registered observers and calls update(...) on each",
        "removes all observers",
        "returns the subject's state",
      ],
      correct: 1,
      explanation:
        "On a state change (setTemperature), the subject iterates its observer list and calls update() so each can react.",
    },
    {
      prompt: "In the PUSH model, how do observers receive data?",
      options: [
        "the subject sends the data as arguments to update(...)",
        "observers call getters on the subject to fetch it",
        "data is read from a file",
        "observers poll on a timer",
      ],
      correct: 0,
      explanation:
        "Push = the subject decides what to send and passes it in, e.g. update(double temperature). The observer receives exactly what the publisher chose.",
    },
    {
      prompt: "In the PULL model, the difference is that...",
      options: [
        "update() takes no data; observers hold a reference to the subject and fetch what they need via getters",
        "the subject pushes all of its fields",
        "there are no observers",
        "the subject is destroyed after notifying",
      ],
      correct: 0,
      explanation:
        "Pull = update() carries little/no data; each observer calls station.getTemperature()/getHumidity() to grab only what it cares about — at the cost of coupling to the subject's API.",
    },
    {
      prompt: "A key runtime capability of Observer is that...",
      options: [
        "observers are fixed at compile time",
        "observers can subscribe and unsubscribe at runtime via add/removeObserver",
        "only one observer is allowed",
        "the subject must know each observer's concrete type",
      ],
      correct: 1,
      explanation:
        "addObserver/removeObserver change the listener set on the fly — remove the phone and the next broadcast skips it, with no code change.",
    },
    {
      prompt: "How does Observer differ from Strategy (both behavioral, both use composition)?",
      options: [
        "They are identical",
        "Observer broadcasts an event to MANY listeners; Strategy swaps ONE algorithm the object runs",
        "Strategy is creational",
        "Observer cannot use interfaces",
      ],
      correct: 1,
      explanation:
        "Same DIP/OCP backbone, different intent: Observer is one-to-many notification (pub/sub, event listeners); Strategy is a single interchangeable algorithm.",
    },
  ],
});
