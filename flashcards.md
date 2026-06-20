# Design Pattern Flashcards (active recall)

How to use: cover the answer. Read the **Problem**, try to name the pattern, then recite Solution + JDK example + Trade-off before revealing. Do the "must know" set daily, the rest every 2–3 days.

---

## Must know cold

**Q1.** I need exactly one instance of a class, shared everywhere (config, logging, connection pool).
<details><summary>Answer</summary>

- **Pattern:** Singleton
- **Solution:** private constructor + private static instance + static `getInstance()`.
- **JDK:** `Runtime.getRuntime()`.
- **Trade-off:** global state, hard to unit-test/mock; thread-safety needs care (use enum or holder idiom).
</details>

**Q2.** A superclass shouldn't know which concrete object to create — let subclasses decide.
<details><summary>Answer</summary>

- **Pattern:** Factory Method
- **Solution:** abstract `createX()` in the creator; each subclass returns a concrete product.
- **JDK:** `Calendar.getInstance()`, `NumberFormat.getInstance()`.
- **Trade-off:** one product type per factory; adds class count.
</details>

**Q3.** I need to create *families* of related objects (e.g. all "luxury" car parts) that must match.
<details><summary>Answer</summary>

- **Pattern:** Abstract Factory
- **Solution:** a factory interface with multiple `createX()` methods; each concrete factory builds one consistent family.
- **JDK:** `DocumentBuilderFactory`.
- **Trade-off:** adding a new product to the family changes every factory.
</details>

**Q4.** An object has many optional fields and I want readable, step-by-step construction without telescoping constructors.
<details><summary>Answer</summary>

- **Pattern:** Builder
- **Solution:** a Builder collects fields via chained setters, then `build()` returns the immutable object.
- **JDK:** `StringBuilder`, `Stream.Builder`.
- **Trade-off:** more boilerplate; overkill for simple objects.
</details>

**Q5.** I want to swap an algorithm at runtime (e.g. different sort/drive/payment behaviors).
<details><summary>Answer</summary>

- **Pattern:** Strategy
- **Solution:** an interface for the algorithm; concrete strategies; context holds a reference and delegates.
- **JDK:** `Comparator` passed to `Collections.sort()`.
- **Trade-off:** client must know the strategies to choose one.
</details>

**Q6.** When one object changes, many others must be notified automatically.
<details><summary>Answer</summary>

- **Pattern:** Observer
- **Solution:** subject keeps a list of observers, calls `update()` on each on change.
- **JDK:** event listeners (`addActionListener`), `java.util.concurrent.Flow`.
- **Trade-off:** notification order undefined; memory leaks if observers aren't removed.
</details>

**Q7.** I want to add behavior to an object dynamically, without subclassing an explosion of variants.
<details><summary>Answer</summary>

- **Pattern:** Decorator
- **Solution:** wrapper implements the same interface and holds the wrapped object, adding behavior before/after delegating.
- **JDK:** `BufferedReader` wrapping `FileReader`; `Collections.unmodifiableList`.
- **Trade-off:** many small wrapper classes; debugging the stack is harder.
</details>

**Q8.** Two incompatible interfaces need to work together (legacy/3rd-party class vs my interface).
<details><summary>Answer</summary>

- **Pattern:** Adapter
- **Solution:** adapter implements the target interface and translates calls to the adaptee.
- **JDK:** `Arrays.asList()`, `InputStreamReader` (bytes→chars).
- **Trade-off:** extra indirection; not for adding behavior (that's Decorator).
</details>

**Q9.** A complex subsystem is hard to use — I want one simple entry point.
<details><summary>Answer</summary>

- **Pattern:** Facade
- **Solution:** a single class exposes simple methods that orchestrate the messy subsystem.
- **JDK:** `javax.faces`, SLF4J `LoggerFactory`.
- **Trade-off:** can become a god-object; hides power users may need.
</details>

---

## Know well

**Q10.** I need a stand-in that controls access to another object (lazy load, access control, remote, caching).
<details><summary>Answer</summary>

- **Pattern:** Proxy
- **Solution:** proxy implements the same interface, adds control logic, then delegates to the real object.
- **JDK:** `java.lang.reflect.Proxy`, Spring AOP proxies.
- **Trade-off:** extra layer; vs Decorator — Proxy *controls access*, Decorator *adds behavior*.
</details>

**Q11.** I want to encapsulate a request as an object (queue it, log it, undo it).
<details><summary>Answer</summary>

- **Pattern:** Command
- **Solution:** Command interface with `execute()`; concrete commands hold receiver + params; invoker triggers them.
- **JDK:** `Runnable`, `Callable`.
- **Trade-off:** a class per command.
</details>

**Q12.** The skeleton of an algorithm is fixed, but some steps vary by subclass.
<details><summary>Answer</summary>

- **Pattern:** Template Method
- **Solution:** a final method defines the step order; abstract hook methods are overridden by subclasses.
- **JDK:** `AbstractList`, `InputStream.read()`.
- **Trade-off:** inheritance-based, less flexible than Strategy (composition).
</details>

**Q13.** I want to treat individual objects and groups of objects uniformly (tree structures).
<details><summary>Answer</summary>

- **Pattern:** Composite
- **Solution:** leaf and composite share a component interface; composite holds children and forwards calls.
- **JDK:** Swing `Component`/`Container`, file-system trees.
- **Trade-off:** can over-generalize; type safety loosens.
</details>

**Q14.** I want to traverse a collection without exposing its internal structure.
<details><summary>Answer</summary>

- **Pattern:** Iterator
- **Solution:** an iterator object exposes `hasNext()`/`next()`.
- **JDK:** `java.util.Iterator` (literally the pattern).
- **Trade-off:** concurrent modification issues.
</details>

**Q15.** An object's behavior changes based on its internal state, and I want to avoid giant if/switch chains.
<details><summary>Answer</summary>

- **Pattern:** State
- **Solution:** each state is a class implementing a common interface; context delegates and swaps its current state.
- **Trade-off:** vs Strategy — same structure, but State transitions *itself*; Strategy is chosen by the client.
</details>

---

## The two "vs" questions interviewers love

- **Factory Method vs Abstract Factory:** Factory Method makes *one* product via inheritance; Abstract Factory makes a *family* of products via composition.
- **Strategy vs State:** identical structure. Strategy = client picks the algorithm and it doesn't change itself. State = the object transitions between states on its own.
- **Decorator vs Proxy:** Decorator *adds* behavior; Proxy *controls access*. Same wrapping structure.
- **Adapter vs Decorator:** Adapter *changes* the interface; Decorator *keeps* the interface and adds behavior.
