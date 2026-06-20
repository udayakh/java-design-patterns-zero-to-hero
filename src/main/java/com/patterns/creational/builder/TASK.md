# Builder — Creational Pattern

## Problem
`Student` has a few mandatory fields and many OPTIONAL ones. Supporting different
combinations leads to **telescoping constructors** — a growing pile of overloads
that's unreadable, positional (easy to pass args in the wrong order), and can't
even express every combination (same-type overloads collide).

## The pattern
Build the object step by step with a fluent builder, then call `build()`.

1. **`StudentBuilder`** — a class (or `static` nested class) holding the SAME
   fields as `Student`. For each field a setter that **sets the field and
   returns `this`** (enables chaining):
   ```java
   public StudentBuilder setName(String name) { this.name = name; return this; }
   ```
2. **`build()`** on the builder returns a `Student`: `return new Student(this);`
3. **`Student`** gets a constructor that takes a `StudentBuilder` and copies the
   fields out of it. Make it **package-private** (only the builder should create
   a Student) and **remove the telescoping constructors**.
4. **`BuilderDemo`** — construct a student fluently:
   ```java
   Student s = new StudentBuilder()
           .setRollNumber(1).setAge(22).setName("John").setBranch("CSE")
           .setEmailId("john@x.com")        // only the optionals you want
           .build();
   s.printDetails();
   ```

## Done when
- No telescoping constructors remain on `Student`.
- The client sets only the fields it cares about, by name, in any order.
- `BuilderDemo` runs and prints a student built fluently.

## Stretch (matches the video)
- Make `StudentBuilder` **abstract** with an `abstract setSubjects()`, then add
  concrete `EngineeringStudentBuilder` / `MBAStudentBuilder` that fill in
  branch-specific subjects.
- Add a **Director** (`StudentRegistrationDirector`) that encapsulates a standard
  construction sequence (calls the setters in a fixed order and returns the product).

## Builder vs the others
- **Builder:** ONE complex object assembled step by step (many optional params).
- **Abstract Factory:** FAMILIES of related products.
- **Factory Method:** one product, variant chosen by a subclass.
Rule of thumb from the video: *building complex objects → Builder; layering
enhancements dynamically → Decorator.*
