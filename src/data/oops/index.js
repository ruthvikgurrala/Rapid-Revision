const hierarchy = [
    {
        id: '4.1-fundamentals',
        title: '4.1 Fundamentals',
        children: [
            { id: '4.1-class-obj', title: 'Class vs Object' },
            { id: '4.1-modifiers', title: 'Access Modifiers' },
            { id: '4.1-relationships', title: 'Relationships (Composition vs Aggregation)' }
        ]
    },
    {
        id: '4.2-pillars',
        title: '4.2 The 4 Pillars',
        children: [
            { id: '4.2-encap', title: 'Encapsulation' },
            { id: '4.2-abstract', title: 'Abstraction' },
            { id: '4.2-inherit', title: 'Inheritance' },
            { id: '4.2-poly', title: 'Polymorphism' }
        ]
    },
    {
        id: '4.3-advanced',
        title: '4.3 Advanced Concepts',
        children: [
            { id: '4.3-construct', title: 'Constructors & Destructors' },
            { id: '4.3-keywords', title: 'Keywords (static, final)' },
            { id: '4.3-memory', title: 'Memory Management' },
            { id: '4.3-object-methods', title: 'Object Class (equals & hashCode)' },
            { id: '4.3-immutable', title: 'Creating Immutable Classes' }
        ]
    },
    {
        id: '4.4-solid',
        title: '4.4 SOLID Principles',
        children: [
            { id: '4.4-s-o', title: 'SRP & OCP' },
            { id: '4.4-l-i-d', title: 'LSP, ISP, DIP' }
        ]
    },
    {
        id: '4.5-patterns',
        title: '4.5 Design Patterns',
        children: [
            { id: '4.5-creational', title: 'Creational (Singleton, Factory)' },
            { id: '4.5-structural', title: 'Structural (Adapter, Facade)' },
            { id: '4.5-behavioral', title: 'Behavioral (Observer, Strategy)' }
        ]
    }
];

const contentMap = {
    // 4.1 Fundamentals
    '4.1-class-obj': {
        title: 'Class vs Object',

        oneLinerAnswer: "Class is a blueprint (Logical). Object is an instance (Physical/Memory).",
        why: "To model real-world entities. The Class is the 'Idea' of a Dog. The Object is 'Fido'.",
        tradeoffs: [
            "Stack vs Heap: Local references live on stack (Fast). Objects live on Heap (Flexible lifetime).",
            "Memory: Classes take 0 bytes (at runtime, mostly). Objects consume RAM."
        ],
        failureCases: [
            "NullPointerException: Accessing a reference that points to nothing.",
            "Memory Leak: Objects not garbage collected because of dangling references."
        ],
        realWorldUsage: "Everything in Java/C#/Python.",

        content: `### The Blueprint and the Building
*   **Class**: A logical template. It defines properties and behaviors but occupies **no memory** (except metadata).
*   **Object**: A physical instance of a class. It occupies **heap memory**.

#### Copying Objects
1.  **Shallow Copy**: Copies the field values. If the field is a reference to an object, it copies the *reference*, not the object. Changes to the child object reflect in both.
2.  **Deep Copy**: Creates a new copy of the object *and* all the objects it refers to recursively.

#### Anonymous Objects
Objects created without assigning a reference variable.
*   *Usage*: \`new Dog().bark();\` (Used for one-time method calls).`,
        code: {
            java: `class Dog {
    String name;
}
// Shallow Copy
Dog d1 = new Dog(); d1.name = "A";
Dog d2 = d1; // d2 points to d1's memory
d2.name = "B"; // d1.name is also "B"`,
            cpp: `// Deep Copy (Copy Constructor)
class Box {
    int* ptr;
public:
    Box(const Box &b) {
        ptr = new int;
        *ptr = *b.ptr; // Allocate NEW memory
    }
};`
        },
        interviewQuestions: [
            { question: "Can we create an object of an Abstract Class?", answer: "No. Abstract classes are incomplete blueprints. You must subclass them and implement abstract methods.", companies: ["Infosys", "Wipro"] },
            { question: "What is the size of an empty class in C++?", answer: "1 Byte. To ensure that two different objects will have different addresses.", companies: ["Microsoft"] },
            { question: "Unique: Why does Java allow 'Anonymous Objects' but strict OOP theory dislikes them?", answer: "Strict OOP implies objects have identity (names). Anonymous objects sacrifice identity for brevity (e.g., passing a listener). They are functional-style 'disposable' objects.", companies: ["Java Architects"] }
        ]
    },
    '4.1-modifiers': {
        title: 'Access Modifiers',
        visualizerType: 'access-modifiers',

        oneLinerAnswer: "Public (Global), Protected (Inheritance), Default (Package), Private (Class only).",
        why: "Encapsulation. Hiding internal state prevents external code from corrupting it.",
        tradeoffs: [
            "Flexibility (Public) vs Safety (Private): Public is easy but dangerous. Private requires getters/setters.",
            "Protected: Useful for frameworks (Template Method Pattern) but exposes implementation to subclasses."
        ],
        failureCases: [
            "Spaghetti Code: Making everything public leads to tight coupling.",
            "Security Leak: Exposing a private list via a public getter (without defensive copy)."
        ],
        realWorldUsage: "Java API (everything is private/protected unless necessary).",

        content: `### Controlling Visibility
Keywords that set the accessibility of classes, variables, and methods.

| Modifier | Class | Package | Subclass (diff pkg) | World |
| :--- | :--- | :--- | :--- | :--- |
| **public** | Yes | Yes | Yes | Yes |
| **protected** | Yes | Yes | **Yes** (Inheritance only) | No |
| **default** | Yes | **Yes** | No | No |
| **private** | **Yes** | No | No | No |

#### Best Practices
*   **Variables**: Always \`private\`. Use getters/setters.
*   **Methods**: \`public\` if part of the API. \`private\` if internal helper.
*   **Protected**: Use carefully for Template Method Pattern.`,
        interviewQuestions: [
            { question: "Protected vs Default?", answer: "Default is 'Package-Private'. Protected is 'Package-Private + Kids'. Protected allows subclasses in *different* packages to access the member.", companies: ["Oracle"] },
            { question: "Unique: Why are getters/setters considered effective?", answer: "They provide a 'Seam' for future logic. If you expose a field directly, you can never add validation later without breaking all client code. Setters allow you to add `if (age < 0) throw error` later invisibly.", companies: ["Clean Code"] }
        ]
    },



    // --- 4.1 Relationships (The "Has-A" Hierarchy) ---
    '4.1-relationships': {
        title: 'Association, Aggregation, Composition',
        visualizerType: 'uml-relationships',

        oneLinerAnswer: "Association: 'Uses'. Aggregation: 'Has-A' (Weak/Shared). Composition: 'Part-Of' (Strong/Exclusive).",
        why: "To define lifecycle dependency. Does the Engine die if the Car is destroyed?",
        tradeoffs: [
            "Tight Coupling (Composition) vs Loose Coupling (Aggregation).",
            "Lifecycle Management: Composition handles cleanup automatically (cascading delete)."
        ],
        failureCases: [
            "Dangling Pointer (C++): Deleting parent but forgetting child in non-composition.",
            "Circular Dependency: A has B, B has A (infinite loop in seralization)."
        ],
        realWorldUsage: "Car has Engine (Composition). Dept has Students (Aggregation).",

        content: `### Connecting Objectsween Classes
Inheritance is "Is-A". These are "Has-A".

#### 1. Association ("Uses-A")
* **Level**: No ownership.
* **Example**: Teacher uses a Chalk. If Teacher dies, Chalk still exists.

#### 2. Aggregation ("Has-A" - Weak)
* **Level**: Ownership, but independent lifecycles.
* **Example**: \`Library\` contains \`Books\`. If you destroy the Library, the Books **survive** (can be moved).

#### 3. Composition ("Part-Of" - Strong)
* **Level**: Strict ownership. Child cannot exist without Parent.
* **Example**: \`House\` has \`Rooms\`. If you destroy the House, the Rooms are **destroyed** too.
* *Design Tip*: "Favor Composition over Inheritance".`,
        code: {
            java: `// Composition Example
class House {
    private final Room room; // House controls lifecycle
    
    House() {
        room = new Room();
    }
} // If House dies, Room dies.`
        },
        interviewQuestions: [
            { question: "Why favor Composition over Inheritance?", answer: "Inheritance breaks encapsulation (White-box reuse). Composition allows changing behavior at runtime (Black-box reuse) and avoids the 'Fragile Base Class' problem.", companies: ["Amazon", "Uber"] },
            { question: "Unique: Is Composition always better?", answer: "No. Composition adds boilerplate (wrapper methods). Inheritance is better for genuine 'Is-A' relationships where you need literal polymorphism (treating all Dogs as Animals in a list).", companies: ["Google"] }
        ]
    },

    // 4.2 Pillars
    '4.2-encap': {
        title: 'Encapsulation',

        oneLinerAnswer: "Bundling data and methods, and restricting access (Private fields + Public Getters).",
        why: "To maintain invariants. If `age` is public, I can set it to -5. With a setter, I can validate `if (age < 0) throw`.",
        tradeoffs: [
            "Boilerplate: Writing Getters/Setters for everything is tedious (solved by Lombok).",
            "Performance: Function call overhead vs direct field access (JIT inlines this, so non-issue)."
        ],
        failureCases: [
            "Breaking Invariant: Direct field access allows invalid states.",
            "Leaky Abstraction: Returning a reference to a private mutable object."
        ],
        realWorldUsage: "JavaBeans, React State.",

        content: `### The Capsule of Safetya Hiding
Binding data (variables) and methods into a single unit (Class) and restricting access.

#### Why?
1.  **Control**: Read-Only or Write-Only access.
2.  **Validation**: Prevent invalid states (e.g., \`setAge(-5)\`).
3.  **Flexibility**: Change internal implementation without breaking external code.

#### Implementation
*   **Private Fields**: \`private int balance;\`
*   **Public Accessors**: \`public int getBalance() { ... }\`
*   **Bean Standard**: Java Beans follow this structure strictly.`,
        code: {
            java: `class Account {
    private double balance; // Hidden
    
    public void setBalance(double b) {
        if(b >= 0) this.balance = b; // Validation
    }
}`
        },
        interviewQuestions: [
            { question: "Is Encapsulation same as Abstraction?", answer: "No. Encapsulation is **Data Hiding** (Protecting *how* it's done). Abstraction is **Implementation Hiding** (Showing *what* it does). Encapsulation packages it; Abstraction presents the interface.", companies: ["Amazon"] },
            { question: "Unique: Can Encapsulation be broken?", answer: "Yes. Via 'Reflection'. You can use `setAccessible(true)` on a private field to read/write it. This is how frameworks like Spring/Hibernate work magic behind the scenes.", companies: ["Spring Framework"] }
        ]
    },
    '4.2-abstract': {
        title: 'Abstraction (Abstract Class vs Interface)',

        oneLinerAnswer: "Hiding implementation details. Showing 'What' it does, hiding 'How'.",
        why: "To manage complexity. I drive a car using the wheel (Interface), not by manually injecting fuel (Implementation).",
        tradeoffs: [
            "Interface vs Abstract Class: Interfaces allow Multiple Inheritance (of type). Abstract classes allow code reuse.",
            "Over-abstraction: Creating generic 'Manager' classes that do everything and nothing."
        ],
        failureCases: [
            "Tight Coupling: Programming to implementation (`ArrayList list = ...`) instead of interface (`List list = ...`).",
            "Interface Bloat: Adding too many methods makes it hard to implement (Segregation Principle)."
        ],
        realWorldUsage: "JDBC (Interface), OracleDriver (Implementation).",

        content: `### Hiding the Complexity
Showing only essential features while hiding background details.

#### 1. Abstract Class (0-100% Abstraction)
*   Can have constructors, state (variables), and concrete methods.
*   **Use Case**: When related classes share code (e.g., \`Animal\` has \`age\`).

#### 2. Interface (100% Abstraction)
*   **Blueprint of a Blueprint**.
*   **Java 8+**: Can have \`default\` and \`static\` methods.
*   **Use Case**: When unrelated classes share capability (e.g., \`Dog\` and \`Car\` both \`Runnable\`).
*   **Multiple Inheritance**: A class can implement multiple interfaces.`,
        code: {
            java: `interface Remote {
    void powerOn(); // Abstract
    
    default void batteryCheck() { // Java 8
        System.out.println("Battery OK");
    }
}`
        },
        interviewQuestions: [
            { question: "Can an Interface have a Constructor?", answer: "No. Interfaces cannot hold state (instance variables), so there is nothing to initialize.", companies: ["Google"] },
            { question: "Difference between Abstract Class and Interface?", answer: "Abstract Class is for 'Is-A' (Dog is Animal). Interface is for 'Can-Do' (Dog can Run). Abstract classes can have state; Interfaces cannot (until Java 8 static/default).", companies: ["Amazon"] },
            { question: "When to use an Abstract Class?", answer: "When you want to provide a common base implementation for derived classes (e.g., a default 'drinkWater()' method for all Animals).", companies: ["Microsoft"] },
            { question: "Unique: Why can't we instantiate an Abstract Class?", answer: "Because it might have 'Abstract Methods' (Methods without a body). If you could create an object, you might call that empty method, and the CPU wouldn't know what to execute. It's unsafe.", companies: ["Compiler Design"] }
        ]
    },
    '4.2-inherit': {
        title: 'Inheritance',

        oneLinerAnswer: "Mechanism where a new class acquires the properties and methods of an existing class. 'Is-A' relationship.",
        why: "To promote Code Reusability and Logic Hierarchy (Animal -> Dog).",
        tradeoffs: [
            "Reuse vs Coupling: Inheritance is the tightest form of coupling. If Parent changes, all Children break.",
            "Fragile Base Class: Changing the superclass breaks unknown subclasses."
        ],
        failureCases: [
            "Diamond Problem: Multiple inheritance causes ambiguity (Solved in Java via Interfaces).",
            "Liskov Violation: A 'Square' is a 'Rectangle' mathematically, but fails in inheritance if width/height logic differs."
        ],
        realWorldUsage: "Java `Object` class (Parent of all).",

        content: `### The Family Tree
A mechanism where a child class acquires properties of a parent class.

#### The Diamond Problem
*   **Scenario**: Class B and C inherit from A. Class D inherits from B and C.
*   **Issue**: If B and C both override \`print()\`, which version does D get?
*   **Java**: Solved by disallowing Multiple Inheritance of Classes.
*   **C++**: Solved using **Virtual Inheritance** (\`class B : virtual public A\`).

#### Variable Shadowing
If Child has a variable with same name as Parent:
*   The Child variable *shadows* the Parent variable.
*   Access Parent's var using \`super.var\` (Java) or \`Parent::var\` (C++).`,
        code: {
            cpp: `// Virtual Inheritance
class A { public: int x; };
class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {}; // One copy of 'x'`
        },
        interviewQuestions: [
            { question: "What is the Diamond Problem?", answer: "Ambiguity that arises when two parent classes inherit from the same grandparent, and a child inherits from both parents. The child sees two copies of the grandparent's members.", companies: ["C++ Roles"] },
            { question: "Unique: Why does Java forbid Multiple Inheritance of Classes?", answer: "To avoid the Diamond Problem complexity. C++ has it, but it requires 'Virtual Inheritance' which is confusing. Java chose simplicity (Interfaces) over power.", companies: ["Java History"] }
        ]
    },
    '4.2-poly': {
        title: 'Polymorphism',
        visualizerType: 'polymorphism',

        oneLinerAnswer: "One name, many forms. Compile-time (Overloading) and Runtime (Overriding).",
        why: "Flexibility. I can treat a Dog, Cat, and Cow as 'Animal' and call 'speak()', and they all behave correctly.",
        tradeoffs: [
            "Flexibility vs Readability: Dynamic dispatch makes it harder to know strictly *which* code runs just by reading.",
            "Performance: V-Table lookup (Runtime) is slightly slower than static binding."
        ],
        failureCases: [
            "Slicing (C++): Assigning Child to Parent by value loses the Child part.",
            "Hidden Method: Static methods don't support polymorphism (they hide, not override)."
        ],
        realWorldUsage: "`List<string> list = new ArrayList<>();`",

        content: `### Many Forms
The ability of a message to be processed in different ways.

#### 1. Compile-Time (Overloading)
*   Same method name, different args.
*   **Binding**: Early Binding (Compiler decides which method to call).
*   *Fast*.

#### 2. Run-Time (Overriding)
*   Same method signature in Child class.
*   **Binding**: Late Binding (JVM decides at runtime).
*   **Mechanism**: **Virtual Method Table (vtable)**.
    *   The object header points to a vtable.
    *   The vtable maps method names to function addresses.
    *   Example: \`Dog\` object's vtable points to \`Dog::bark\`.`,
        code: {
            java: `Animal a = new Dog();
a.sound(); 
// Compiler checks Animal class for sound().
// Runtime sees 'a' is Dog, calls Dog.sound().`
        },
        interviewQuestions: [
            { question: "Can we override static methods?", answer: "No. Static methods are bound at compile time (Method Hiding, not Overriding).", companies: ["Adobe", "Oracle"] },
            { question: "Can we override private methods?", answer: "No. Private methods are not visible to subclasses, so they cannot be overridden.", companies: ["Amazon"] },
            { question: "What is Covariant Return Type?", answer: "Since Java 5, an overriding method can return a subtype of the return type declared in the parent method. (e.g., Parent returns Animal, Child returns Dog).", companies: ["Goldman Sachs"] },
            { question: "Overloading vs Overriding?", answer: "Overloading: Same name, different args (Compile-time). Overriding: Same name, same args (Run-time).", companies: ["TCS"] },
            { question: "Unique: Does Polymorphism hurt performance?", answer: "Slightly. Virtual method calls require looking up the 'vtable' (pointer dereference) instead of a direct jump to the function address. In high-performance games (C++), developers sometimes avoid virtual functions for this reason.", companies: ["Game Dev"] }
        ]
    },

    // 4.3 Advanced
    '4.3-construct': {
        title: 'Constructors & Destructors',

        oneLinerAnswer: "Constructor: Block of code to initialize an object. Destructor: Cleanup code before object death (C++ only, Java uses finalize/Cleaner).",
        why: "To ensure an object starts in a valid state. You shouldn't have a 'User' without a 'Name'.",
        tradeoffs: [
            "Default vs Parameterized: Default is easy. Parameterized enforces requirements.",
            "Copy Constructor (C++): Crucial for Deep Copy. Java uses `clone()` or Copy Constructor."
        ],
        failureCases: [
            "Private Constructor: Can't instantiate class (Used in Singleton).",
            "Chaining Error: Forgetting to call `super()` in inheritance."
        ],
        realWorldUsage: "`new StringBuilder(query);`",

        content: `### Birth and Death
*   **Constructor**: Special method to initialize an object.
    *   **Java**: \`ClassName()\`. Implicitly called on \`new\`.
    *   **Chaining**: Calling \`this()\` calls another constructor in same class.
    *   **Copy Constructor**: Creates object by copying another object (Deep Copy).
*   **Destructor**: Cleanup method.
    *   **C++**: \`~ClassName()\`. Deterministic. Manual delete.
    *   **Java**: \`finalize()\` (Deprecated). Non-deterministic. Use \`try-with-resources\`.`,
        code: {
            cpp: `class Box {
public:
    Box() { cout << "Created"; }
    ~Box() { cout << "Destroyed"; } // RAII Pattern
};`
        },
        interviewQuestions: [
            { question: "Virtual Destructor?", answer: "In C++, if you delete a derived class object via a base class pointer, the derived destructor is NOT called unless the base destructor is **virtual**. This causes memory leaks.", companies: ["Adobe", "Microsoft"] },
            { question: "Unique: Why doesn't Java have Destructors?", answer: "Because Java has Garbage Collection (GC). You don't manually delete objects, so you don't need a deterministic destructor. Java tried `finalize()`, but it was unpredictable and is now deprecated.", companies: ["Java Core"] }
        ]
    },
    '4.3-keywords': {
        title: 'Keywords (static, final, this, super)',

        oneLinerAnswer: "Static: Belongs to Class (Shared). Final: Constant/Immutable. This: Current Object. Super: Parent Object.",
        why: "To manage scope and mutability. Math.PI should be Static Final (Global Constant).",
        tradeoffs: [
            "Static vs Instance: Static is memory efficient but hard to test (global state).",
            "Final Performance: Compiler can inline final variables."
        ],
        failureCases: [
            "Memory Leak: Static lists grow forever if not cleared.",
            "Thread Safety: Static variables are shared by all threads (Race Conditions)."
        ],
        realWorldUsage: "`public static void main`",

        content: `### The Power words
1.  **static** (Belongs to Class):
    *   **Variable**: Shared among all instances (e.g., \`counters\`).
    *   **Method**: Called without object. Cannot touch non-static fields.
    *   **Block**: \`static { ... }\` runs ONCE when class is loaded (ClassLoader).
2.  **final** (Immutable):
    *   **Variable**: Constant. Must be initialized.
    *   **Method**: Cannot be overridden.
    *   **Class**: Cannot be inherited (Security).
    *   *Reference*: \`final Dog d = new Dog();\` -> \`d\` cannot point to another Dog, but \`d.name\` CAN change.`,
        code: {
            java: `class Student {
    static String college = "MIT"; // Shared
    final int id; // Constant per object
    
    Student(int id) { this.id = id; }
}`
        },
        interviewQuestions: [
            { question: "Can a static method override a non-static method?", answer: "No. Static methods are bound at **Compile Time** (Static Binding). Overriding requires Runtime Binding.", companies: ["Goldman Sachs"] },
            { question: "Unique: Can a static class exist?", answer: "In Java, only **Nested** classes can be static. Top-level classes cannot be static. A static nested class behaves like a top-level class but is packaged inside another for convenience.", companies: ["Oracle"] }
        ]
    },
    '4.3-exception': {
        title: 'Exception Handling',
        content: `### Graceful Failure
Handling runtime errors so the app flow doesn't break.
*   **Try**: Block to monitor for errors.
*   **Catch**: Block that handles the error.
*   **Finally**: Block that executes *always* (Close DB connections).
*   **Throw**: Explicitly throw an exception.
*   **Throws**: Declare that a method *might* throw an exception.

#### Checked vs Unchecked
*   **Checked**: Compile-time (IOException). Must handle.
*   **Unchecked**: Runtime (NullPointer). Optional handle.`,
        code: {
            java: `try {
    int data = 50 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Clean up");
}`
        }
    },
    '4.3-memory': {
        title: 'Memory Management (Stack vs Heap)',
        visualizerType: 'memory-layout',

        oneLinerAnswer: "Stack: Local variables, method calls (LIFO, Fast). Heap: Objects (Dynamic, Managed by GC).",
        why: "We need fast access for temporary execution (Stack) and flexible storage for data (Heap).",
        tradeoffs: [
            "Speed vs Size: Stack is ultra-fast but small. Heap is huge/slow (fragmentation).",
            "Manual vs Auto: C++ (Manual delete) is fast but risky (leaks). Java (GC) is safe but has pauses."
        ],
        failureCases: [
            "StackOverflowError: Infinite recursion fills stack.",
            "OutOfMemoryError: Heap full (Memory Leak)."
        ],
        realWorldUsage: "Recursion uses stack. `new Object()` uses heap.",

        content: `### Where does data live?
1.  **Stack**: Stores method frames, local primitives, and *references*.
    *   *Fast*. Auto-cleans when method returns.
2.  **Heap**: Stores actual **Objects**.
    *   *Slower*. Needs Garbage Collection.

### Garbage Collection (GC)
*   **Mark and Sweep**: JVM pauses, traces all "live" objects starting from GC Roots (Stack, Static vars), and deletes the rest.
*   **Generational GC**:
    *   **Eden Space**: New objects die young.
    *   **Survivor Space**: Objects that survive Eden.
    *   **Tenured**: Long-lived objects.

#### Reference Types
1.  **Strong**: Normal reference. GC never touches it.
2.  **Weak**: GC claims it if no stronger refs exist. (Caching).
3.  **Soft**: GC claims it only if memory is critically low.
4.  **Phantom**: Object is already finalized, waiting for cleanup.`,
        interviewQuestions: [
            { question: "What is Memory Leak in Java?", answer: "When objects are no longer needed but are still referenced (e.g., inside a static List), preventing GC from reclaiming them.", companies: ["Amazon"] },
            { question: "Stack vs Heap Memory?", answer: "Stack: Local variables, method calls. Fast access. LIFO. Heap: Objects. Global access. Slower. Garbage Collected.", companies: ["Microsoft"] },
            { question: "What is 'Stop-the-World' event?", answer: "During certain GC phases (like Mark and Sweep), the JVM pauses all application threads. High latency applications try to minimize this.", companies: ["Netflix"] },
            { question: "Unique: Can you force Garbage Collection?", answer: "No. You can call `System.gc()`, but it is just a 'suggestion' to the JVM. The JVM might ignore it if it's busy or memory is fine.", companies: ["Java Performance"] }
        ]
    },



    // --- 4.3 Object Methods (The Contract) ---
    '4.3-object-methods': {
        title: 'Object Class (equals & hashCode)',

        oneLinerAnswer: "Equals checks content (logical equality). HashCode returns an integer bucket for HashMaps.",
        why: "To store objects in HashSets/Maps. If two objects are 'equal', they MUST have the same hashcode.",
        tradeoffs: [
            "Identity (==) vs Equality (.equals): == checks memory address. Equals checks value.",
            "Performance: Poor hashcode function turns HashMap from O(1) to O(N)."
        ],
        failureCases: [
            "Broken Contract: Overriding equals but not hashCode breaks HashMap lookup.",
            "Mutable Key: Changing object fileds after putting in Map makes it un-retrievable."
        ],
        realWorldUsage: "HashMap keys.",

        content: `### The Mother of all Classes
Every class in Java inherits from \`Object\`. You MUST override these correctly.

#### 1. equals()
* Default: Checks memory address (\`==\`).
* Required: Check logical equality (ID, Name, etc.).

#### 2. hashCode()
*   **The Contract**: If \`a.equals(b)\` is true, then \`a.hashCode()\` MUST be equal to \`b.hashCode()\`.
*   If you violate this, HashMaps will break (you put an object in, but can't get it out).`,
        code: {
            java: `@Override
public boolean equals(Object o) {
    if (this == o) return true; // Same ref
    if (o == null || getClass() != o.getClass()) return false;
    User user = (User) o;
    return id == user.id;
}

@Override
public int hashCode() {
    return Objects.hash(id);
}`
        },
        interviewQuestions: [
            { question: "What happens if I override equals() but not hashCode()?", answer: "Two objects might be logically equal (ID=1), but they generate different hashCodes. If used in a HashMap, the Map will look in the wrong bucket and return null.", companies: ["Google", "JPMorgan"] },
            { question: "Unique: Why is the default hashCode() creating a random integer?", answer: "It isn't truly random. It's typically derived from the memory address of the object (though JVM implementation specifics vary). This ensures every new object has a unique identity by default.", companies: ["JVM Internals"] }
        ]
    },

    // --- 4.3 Immutable Classes ---
    '4.3-immutable': {
        title: 'Immutable Classes',

        oneLinerAnswer: "A class whose state cannot be changed after creation. (e.g., String).",
        why: "Thread safety. If it can't change, 100 threads can read it safely without locks.",
        tradeoffs: [
            "Safety vs Garbage: Modifying a string creates a new string (high GC pressure).",
            "String Pool: Java caches string literals to save RAM."
        ],
        failureCases: [
            "Reflection Attack: Using reflection to modify 'private final' fields breaking security.",
            "Performance: String concatenation in loops (Use StringBuilder)."
        ],
        realWorldUsage: "String, BigInteger, Wrapper Classes (Integer, Long).",

        content: `### Unchangeable Objects
Immutable objects are thread-safe and cache-friendly.
**How to make a class Immutable:**
1.  Make class \`final\` (No subclasses).
2.  Make all fields \`private final\`.
3.  No Setters.
4.  **Deep Copy** mutable fields in Constructor and Getters (Crucial!).`,
        code: {
            java: `public final class Employee {
    private final String name;
    private final Date doJ; // Mutable object!

    public Employee(String name, Date doJ) {
        this.name = name;
        // Deep Copy (Defensive Copy)
        this.doJ = new Date(doJ.getTime());
    }

    public Date getDoJ() {
        // Return clone, not original reference
        return new Date(doJ.getTime());
    }
}`
        }
    },

    // 4.4 SOLID
    '4.4-s-o': {
        title: 'SRP & OCP',

        oneLinerAnswer: "SRP: Class should have 1 reason to change. OCP: Closed for Mod, Open for Ext.",
        why: "Maintainability. SRP prevents 'God Classes'. OCP prevents breaking existing code when adding features.",
        tradeoffs: [
            "Fragmentation: SRP can lead to 100 tiny classes.",
            "Complexity: OCP requires interfaces/strategies which adds indirection."
        ],
        failureCases: [
            "God Object: A 'Utils' class that does logging, validation, and db access.",
            "Regression: Modifying a core function to support a specific case breaks everyone else."
        ],
        realWorldUsage: "Plugins (OCP).",

        content: `### S.O.L.I.D - Part 1
*   "A class should have only **one reason to change**."
*   *Bad*: \`User\` class handles Auth AND Email Logging.
*   *Good*: \`User\` class (Data), \`AuthManager\` (Logic), \`EmailService\` (Logging).

### 2. Open/Closed Principle (OCP)
*   "Open for **Extension**, Closed for **Modification**."
*   *Bad*: \`if (type == 'PDF') savePdf() else if (type == 'Word') saveWord()\`.
*   *Good*: Interface \`Saver\`. Class \`PdfSaver implements Saver\`. Just add new class to extend.`,
        interviewQuestions: [
            { question: "Why is SRP important for testing?", answer: "If a class does one thing, it has fewer test cases. If it does 10 things, testing one feature might break another unrelated feature.", companies: ["Test Driven Development"] },
            { question: "Unique: Does OCP apply to bug fixes?", answer: "No. You never 'extend' a bug. You modify the code to fix it. OCP applies to **New Features** only.", companies: ["Senior Architect"] }
        ]
    },
    '4.4-l-i-d': {
        title: 'LSP, ISP, DIP',

        oneLinerAnswer: "LSP: Subtype must be substitutable for Base. ISP: Many specific interfaces > One general. DIP: Depend on Abstractions.",
        why: "Decoupling. DIP allows swapping MySQL for PostgreSQL without changing business logic.",
        tradeoffs: [
            "Over-engineering: Creating interfaces for classes that will never have a second implementation."
        ],
        failureCases: [
            "LSP Violation: Ostrich extends Bird, but `fly()` throws Exception.",
            "Fat Interface: Implementing methods you don't need (throws UnsupportedOperationException)."
        ],
        realWorldUsage: "Dependency Injection (Spring Framework).",

        content: `### S.O.L.I.D - Part 2
*   "Subtypes must be substitutable for their base types."
*   *Fail*: \`Square extends Rectangle\`. If you set \`rect.setWidth(5)\`, you expect height to stay same. In Square, it changes.

### 4. Interface Segregation Principle (ISP)
*   "Clients should not be forced to depend on methods they do not use."
*   *Fix*: Split huge \`Worker\` interface into \`Eater\` and \`Coder\`. Robot implements \`Coder\` but not \`Eater\`.

### 5. Dependency Inversion Principle (DIP)
*   "Depend on Abstractions, not Concretions."
*   *Code*: \`Store\` should depend on \`PaymentProcessor\` (Interface), not \`StripeButton\` (Class). Allows swapping Stripe for PayPal easily.`
    },

    // 4.5 Patterns
    '4.5-creational': {
        title: 'Creational Patterns (Thread-Safe)',
        content: `### Singleton (Double-Checked Locking)
The standard interview implementation.
1.  **volatile**: Ensures visibility of changes across threads.
2.  **synchronized**: Prevents race conditions during initialization.`,
        code: {
            java: `class Database {
    private static volatile Database instance;
    
    private Database() {} // Prevent 'new'
    
    public static Database getInstance() {
        if (instance == null) { // 1st Check
            synchronized (Database.class) {
                if (instance == null) { // 2nd Check
                    instance = new Database();
                }
            }
        }
        return instance;
    }
}`
        },
        interviewQuestions: [
            { question: "Why is Singleton considered an Anti-Pattern?", answer: "It introduces Global State, hides dependencies, makes unit testing difficult (cannot mock static calls), and violates Single Responsibility Principle.", companies: ["Google", "ThoughtWorks"] },
            { question: "Factory vs Abstract Factory?", answer: "Factory Method: Creates one type of object (e.g., CarFactory -> BMW). Abstract Factory: Creates families of related objects (e.g., CarFactory -> BMW Engine, BMW Tire, BMW Body).", companies: ["Amazon"] },
            { question: "Unique: Why is 'Double-Checked Locking' needed in Singleton?", answer: "To be thread-safe without killing performance. You only lock (synchronized) the *first* time the instance is created. After that, you just return the instance without locking.", companies: ["High Frequency Trading"] }
        ]
    },
    '4.5-structural': {
        title: 'Structural Patterns',

        oneLinerAnswer: "Adapter (Incompatible interfaces), Facade (Simplified interface), Decorator (Add behavior dynamically).",
        why: "To connect different classes. Adapter makes square peg fit round hole.",
        tradeoffs: [
            "Wrapper Overhead: Too many decorators slow down execution.",
            "Facade limits: Hides power features for simplicity."
        ],
        failureCases: [
            "Object Identity: A Decorated object is not the original object (identity equality fails).",
            "Adapter Hell: Adapters adapting adapters."
        ],
        realWorldUsage: "InputStreamReader (Adapter), Front Controller (Facade).",

        content: `### Class composition
*   **Goal**: Make incompatible interfaces work together.
*   **Analogy**: USB-C to HDMI dongle.
*   **Code**: Wrapper class converts calls.

### 2. Facade
*   **Goal**: Simplified interface to a complex system.
*   **Analogy**: Car Dashboard hides the complex engine wiring.
*   **Use Case**: API Getways.`,
        interviewQuestions: [
            { question: "Adapter vs Facade?", answer: "Adapter: Makes two existing interfaces compatible (1-to-1). Facade: Provides a simple interface to a complex subsystem (1-to-Many).", companies: ["Microsoft"] },
            { question: "What is the Proxy Pattern?", answer: "A placeholder for another object to control access to it. Uses: Lazy Initialization (Virtual Proxy), Security (Protection Proxy), Remote Access (Remote Proxy).", companies: ["Oracle"] }
        ]
    },
    '4.5-behavioral': {
        title: 'Behavioral Patterns',

        oneLinerAnswer: "Observer (Pub/Sub), Strategy (Swap algos), Command (Encapsulate request).",
        why: "To manage communication. Observer decouples UI from Data.",
        tradeoffs: [
            "Memory Leak: Observers not de-registering.",
            "Callback Hell: Too many events firing makes flow hard to trace."
        ],
        failureCases: [
            "Lapsed Listener: Listener keeps object alive preventing GC.",
            "Strategy Explosion: 50 classes for 50 sorted types."
        ],
        realWorldUsage: "React useEffect (Observer), PaymentMethod (Strategy).",

        content: `### Object Communication
*   **Goal**: Notify subscribers when state changes.
*   **Use Case**: Event Listeners, Newsletter (One-to-Many).
*   **Components**: Subject (Publisher) and Observer (Subscriber).

### 2. Strategy
*   **Goal**: Swap algorithms at runtime.
*   **Use Case**: \`Collections.sort(list, Comparator)\`. The Comparator is the strategy.`,
        interviewQuestions: [
            { question: "State Pattern vs Strategy Pattern?", answer: "State: Object acts differently based on internal state (e.g., Phone uses 'Silent' profile). Strategy: Client swaps algorithm explicitly (e.g., 'Pay via CreditCard' vs 'Pay via PayPal').", companies: ["Uber"] },
            { question: "What is the Chain of Responsibility?", answer: "Passes a request along a chain of handlers. Each handler decides either to process the request or pass it to the next handler (e.g., Logger Levels: Debug -> Info -> Error).", companies: ["Atlassian"] }
        ]
    }
};

const flatten = (items) => {
    let flat = [];
    items.forEach(item => {
        if (item.children) {
            flat = flat.concat(flatten(item.children));
        } else {
            const details = contentMap[item.id] || {};
            if (!details.content) {
                details.content = "Detailed content coming soon...";
            }
            flat.push({ ...item, ...details });
        }
    });
    return flat;
};

const oopsData = {
    id: 'oops',
    hierarchy: hierarchy,
    topics: flatten(hierarchy)
};

export default oopsData;
