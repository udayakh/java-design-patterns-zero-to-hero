# Singleton — The Bad Approach

## Naive code (the problem)
A normal class with a public constructor, `new`-ed wherever it's needed:

```java
public class AppConfig {
    private String appName;
    public AppConfig() { }                 // anyone can create one
    public void setAppName(String n) { appName = n; }
    public String getAppName() { return appName; }
}

// Client A
AppConfig a = new AppConfig();
a.setAppName("QuizApp");

// Client B — a DIFFERENT object
AppConfig b = new AppConfig();
System.out.println(b.getAppName());   // null! B never saw A's change
System.out.println(a == b);           // false — two separate instances
```

## Why it's bad
- **No single source of truth** — every `new` makes a fresh object, so shared
  config/state diverges between callers.
- **Wasted resources** — if the object is expensive (connection pool, cache),
  you pay for it many times over.
- **No global access point** — callers must pass the instance around manually.

## The fix
Private constructor + a `private static` instance + `static getInstance()` so the
class hands out the *same* object every time. See [`AppConfig.java`](AppConfig.java)
and [`UML.md`](UML.md).
