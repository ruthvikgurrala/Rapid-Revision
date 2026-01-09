const hierarchy = [
    {
        id: '6.1-ood',
        title: '6.1 Object-Oriented Design (OOD)',
        children: [
            { id: '6.1-uml', title: 'UML Diagrams' },
            { id: '6.1-problems', title: 'Classic Problems (Parking Lot, Elevator)' }
        ]
    },
    {
        id: '6.2-lld',
        title: '6.2 Low-Level Design (LLD)',
        children: [
            { id: '6.2-principles', title: 'SOLID & Clean Code' },
            { id: '6.2-patterns', title: 'Design Patterns (GoF)' },
            { id: '6.2-concur', title: 'Concurrency & Threading' }
        ]
    },
    {
        id: '6.3-hld',
        title: '6.3 High-Level Design (HLD)',
        children: [
            { id: '6.3-scale', title: 'Scaling & Load Balancing' },
            { id: '6.3-db', title: 'Database Scaling (Sharding)' },
            { id: '6.3-comm', title: 'Communication (REST/GraphQL/Queues)' }
        ]
    },
    {
        id: '6.4-dist',
        title: '6.4 Distributed Concepts',
        children: [
            { id: '6.4-cap', title: 'CAP & PACELC' },
            { id: '6.4-hashing', title: 'Consistent Hashing' },
            { id: '6.4-transactions', title: 'Distributed Transactions (Saga)' }
        ]
    },
    {
        id: '6.5-reality',
        title: '6.5 Real-World Architecture',
        children: [
            { id: '6.5-resilience', title: 'Resilience (Circuit Breaker)' },
            { id: '6.5-rate', title: 'Rate Limiting Algorithms' },
            { id: '6.5-interview', title: 'Interview Frameworks' }
        ]
    },
    {
        id: '6.6-internals',
        title: '6.6 Deep Internals (The L3 Layer)',
        children: [
            { id: '6.6-storage-engines', title: 'B-Trees vs LSM Trees' },
            { id: '6.6-caching-deep', title: 'Caching Strategies & Eviction' },
            { id: '6.6-cdn', title: 'CDNs & Edge Computing' }
        ]
    },
    {
        id: '6.7-advanced-data',
        title: '6.7 Advanced Data Patterns',
        children: [
            { id: '6.7-bloom', title: 'Bloom Filters & HyperLogLog' },
            { id: '6.7-spatial', title: 'Geo-Spatial Indexes (QuadTree)' },
            { id: '6.7-consensus', title: 'Consensus (Paxos/Raft)' }
        ]
    }
];

const contentMap = {
    // 6.1 OOD
    '6.1-uml': {
        title: 'UML Diagrams',
        visualizerType: 'uml-diagram',

        oneLinerAnswer: "Standardized visual modeling language. Class Diagram (Structure), Sequence Diagram (Behavior/Time).",
        why: "To communicate design without reading 10k lines of code. 'A picture is worth 1000 lines'.",
        tradeoffs: [
            "Detail vs Maintenance: Detailed UMLs become outdated instantly. High-level sketches live forever.",
            "Visualizer vs Text: MermaidJS allows 'Code as Diagram' which is version control friendly."
        ],
        failureCases: [
            "Analysis Paralysis: Spending 3 weeks drawing diagrams and 0 days coding.",
            "Desynchronization: Code changes but diagram doesn't."
        ],
        realWorldUsage: "Whiteboarding interviews, Architecture Documentation (RFCs).",

        content: `### Visualizing the Code
Unified Modeling Language (UML) is the standard for visual system design.

#### 1. Class Diagram (Structural)
The most common diagram. Shows classes, attributes, methods, and relationships.
*   **Association**: "Uses" (Solid line).
*   **Inheritance**: "Is-A" (Solid line + Triangle).
*   **Composition**: "Part-of" (Solid line + Filled Diamond). Strong lifecycle (House dies -> Room dies).
*   **Aggregation**: "Has-A" (Solid line + Empty Diamond). Weak lifecycle (Library dies -> Books survive).

#### 2. Sequence Diagram (Behavioral)
Shows object interactions over time.
*   **Lifeline**: Vertical line (Time).
*   **Messages**: Arrows between lifelines (Sync vs Async).
*   *Use Case*: Debugging flow failures (e.g., Payment Timeout).`,
        interviewQuestions: [
            { question: "Aggregation vs Composition?", answer: "Composition is a 'death-relationship'. If the parent object is destroyed, the child objects are also destroyed (e.g., Human/Heart). Aggregation is loosely coupled; the child exists independently (e.g., Car/Driver).", companies: ["Adobe", "Microsoft"] }
        ]
    },
    '6.1-problems': {
        title: 'Classic OOD Problems (Parking Lot)',

        oneLinerAnswer: "Object Oriented Design interviews. Focus on Requirements -> Classes -> Relationships -> Patterns.",
        why: "To test ability to translate vague requirements into concrete Class structures.",
        tradeoffs: [
            "Over-engineering: Using Strategy Pattern for something that could be an `if-else`.",
            "Singleton abuse: Making the 'ParkingLotManager' a singleton makes testing hard."
        ],
        failureCases: [
            "Missing Waitlist: What if Lot is full? (Requirements gathering fail).",
            "Concurrency: Two cars booking the same spot at the same time."
        ],
        realWorldUsage: "Designing a new microservice module.",

        content: `### 1. Design a Parking Lot
*   **Requirements**: Multiple floors, Spot types (Compact, Large, Moto), Pricing, Ticket.
*   **Classes**:
    *   \`ParkingLot\` (Singleton): Manages the lot.
    *   \`Level\`: Contains list of spots.
    *   \`ParkingSpot\` (Abstract): \`Compact\`, \`Large\`.
    *   \`Vehicle\` (Abstract): \`Car\`, \`Truck\`.
    *   \`Ticket\`: \`issuedAt\`, \`spotId\`.
*   **Patterns**: **Factory** (create spots), **Strategy** (Pricing logic).

### 2. Design an Elevator System
*   **Requirements**: N Elevators, M Floors, Optimization.
*   **Algorithm**: **SCAN (Elevator Algorithm)** / Look Algorithm.
*   **State Machine**: \`IDLE\` -> \`MOVING_UP\` -> \`STOPPED\`.
*   **Dispatcher**: Central logic to assign nearest elevator to a request.`,
        code: {
            java: `// Parking Lot Singleton
class ParkingLot {
    private static ParkingLot instance;
    private ParkingLot() {} // Private Constructor
    
    public static ParkingLot getInstance() {
        if (instance == null) instance = new ParkingLot();
        return instance;
    }
}`
        },
        interviewQuestions: [
            { question: "How to handle 'Concurrency' in Parking Lot?", answer: "If 2 cars try to book the same spot simultaneously? Use 'Optimistic Locking' (DB versioning) or a 'Synchronized' block (Single server) or a Distributed Lock (Redis Redlock).", companies: ["Amazon", "Google"] },
            { question: "Unique: Why is Elevator System a favorite interview question?", answer: "Because it tests **Scheduling Algorithms** (SCAN/LOOK) and **State Machines** more than just standard CRUD. It shows if you can think in terms of Events and Optimization.", companies: ["Uber"] }
        ]
    },

    // 6.2 LLD
    '6.2-principles': {
        title: 'SOLID, KISS, DRY, YAGNI',
        visualizerType: 'solid-principles',

        oneLinerAnswer: "SOLID (Class Design), KISS (Keep It Simple), DRY (Don't Repeat), YAGNI (You Aren't Gonna Need It).",
        why: "To prevent Technical Debt. Complex code is hard to read, test, and maintain.",
        tradeoffs: [
            "DRY vs Coupling: De-duplicating code can mistakenly couple unrelated logic (The wrong abstraction).",
            "YAGNI vs Future-proofing: Over-optimizing for a future that never comes vs painting yourself into a corner."
        ],
        failureCases: [
            "Loop Unrolling: Writing 100 lines manually to avoid a loop (KISS fail).",
            "Copy-Paste coding: Fixing a bug in one place but missing the copy (DRY fail)."
        ],
        realWorldUsage: "Code Reviews.",

        content: `### SOLID Principles
1.  ** S(SRP) **: Single Responsibility.
    *   * Bad *: \`UserManager\` does Auth + Email + DB Access.
    *   *Good*: Split into \`AuthService\`, \`EmailService\`, \`UserRepository\`.
2.  **O (OCP)**: Open for Extension, Closed for Modification.
    *   *Use*: Polymorphism/Interfaces instead of giant \`if-else\` chains.
3.  **L (LSP)**: Liskov Substitution.
    *   *Rule*: A subclass should not break the behavior of the superclass (e.g., throwing standard RefusedBequest exception).
4.  **I (ISP)**: Interface Segregation.
    *   *Rule*: Large interfaces should be split. A client shouldn't implement methods it doesn't use.
5.  **D (DIP)**: Dependency Inversion.
    *   *Rule*: High-level modules should not depend on low-level modules. Both should depend on Abstractions.

### Clean Code
*   **DRY**: Don't Repeat Yourself.
*   **KISS**: Keep It Simple, Stupid.
*   **YAGNI**: You Aren't Gonna Need It.`,
        interviewQuestions: [
            { question: "Explain Dependency Injection.", answer: "It implements DIP. Instead of a class creating its own dependencies (new Database()), the dependencies are 'injected' via Constructor or Setter. This allows easy swapping (e.g., injecting MockDatabase for testing).", companies: ["Google", "Netflix"] },
            { question: "Unique: Is 'Don't Repeat Yourself' (DRY) always good?", answer: "No. Sometimes duplication is better than the wrong abstraction. If two pieces of code look the same but change for different reasons (Incidental Duplication), merging them violates SRP and creates coupling.", companies: ["Pragmatic Programmer"] }
        ]
    },
    '6.2-patterns': {
        title: 'Design Patterns (GoF)',
        content: `### 1. Creational (Object Creation)
*   **Singleton**: One instance. (DB Connection).
*   **Builder**: Step-by-step construction. (Complex User Config).
*   **Factory**: Creation logic hidden. (PaymentGatewayFactory -> Stripe/PayPal).

### 2. Structural (Class Structure)
*   **Adapter**: Incompatible interfaces work together. (JSON -> XML Adapter).
*   **Decorator**: Add features dynamically. (Stream wrapping: \`new BufferedInputStream(new FileInputStream())\`).
*   **Facade**: Simple interface for complex logic. (PaymentFacade.pay() calls Bank, Ledger, Notification).

### 3. Behavioral (Communication)
*   **Observer**: Pub/Sub. (React useEffect, Event Listeners).
*   **Strategy**: Swap algorithms. (Google Maps: CarStrategy, WalkStrategy).`,
        interviewQuestions: [
            { question: "Decorator vs Adapter?", answer: "Decorator: Enhances an object without changing its interface. Adapter: Changes the interface to match what the client expects.", companies: ["Google"] },
            { question: "When to use Builder Pattern?", answer: "When an object has many optional parameters or complex construction steps (e.g., PizzaBuilder.addCheese().addPepperoni().build()). Avoids 'Telescoping Constructor' anti-pattern.", companies: ["Amazon"] },
            { question: "Unique: What is the 'Null Object Pattern'?", answer: "Instead of returning `null` (and causing NullPointerExceptions), return a default 'empty' object that does nothing. (e.g., `return new NullLogger()` instead of `null`). This removes `if (x != null)` checks.", companies: ["Clean Code"] }
        ]
    },
    '6.2-concur': {
        title: 'Concurrency & Threading',
        visualizerType: 'concurrency-model',

        oneLinerAnswer: "Process (OS unit) vs Thread (Lightweight unit). Deadlock (Stuck waiting). Race Condition (Unordered memory access).",
        why: "Parallelism. CPUs have 16 cores. Single-threaded code wastes 15 cores.",
        tradeoffs: [
            "Threads vs Event Loop: Threads block memory. Event Loop (Node.js) is non-blocking IO but single CPU.",
            "Locking vs CAS: Locks are safe but slow. Compare-And-Swap (Atomic) is fast but complex."
        ],
        failureCases: [
            "Deadlock: A waits for B, B waits for A.",
            "Race Condition: Bank balance becomes negative because two withdrawals happened simultaneously."
        ],
        realWorldUsage: "Web Servers (Tomcat uses Threads, Node uses Event Loop).",

        content: `### Multithreaded Design
Writing thread- safe code for high throughput.

#### Key Concepts
1.  ** Race Condition**: Two threads modify shared data simultaneously -> Corrupt state.
    *   * Fix *: \`synchronized\`, \`ReentrantLock\`.
2.  **Deadlock**: Thread A waits for B, B waits for A. (Circular Dependency).
    *   *Fix*: Acquire locks in order. Timeout.
3.  **Thread Pool**: Expensive to create threads. Reuse them.
    *   **FixedThreadPool**: Fixed N threads.
    *   **CachedThreadPool**: Creates new as needed, kills idle.
4.  **Producer-Consumer**:
    *   Uses a **BlockingQueue**. Producer puts, blocks if full. Consumer takes, blocks if empty.`,
        code: {
            java: `BlockingQueue<Integer> q = new LinkedBlockingQueue<>(10);
// Producer
q.put(1); // Blocks if full
// Consumer
int val = q.take(); // Blocks if empty`
        },
        interviewQuestions: [
            { question: "What acts as a monitor in Java?", answer: "Every object in Java has an intrinsic lock (monitor) associated with it, used for synchronization.", companies: ["Oracle"] },
            { question: "Thread vs Process?", answer: "Process: Independent execution environment (Heap not shared). Thread: Lightweight process (Heap shared).", companies: ["Microsoft"] }
        ]
    },

    // 6.3 HLD
    '6.3-scale': {
        title: 'Scaling & Load Balancing',
        content: `### Handling Growth
1.  **Vertical Scaling (Scale Up)**: Adding CPU/RAM to a single machine.
    *   *Limit*: Hardware ceiling. SPOF (Single Point of Failure).
2.  **Horizontal Scaling (Scale Out)**: Adding more nodes.
    *   *Limit*: Complexity (Data partitioning, consistency).

### Load Balancing (LB)
Distributing traffic across servers to prevent overload.
*   **Algorithms**:
    1.  **Round Robin**: A -> B -> C -> A. Simple.
    2.  **Least Connections**: Send to server with fewest active requests.
    3.  **IP Hash**: Sticky Session (User IP always goes to Server A).
*   **L4 vs L7**:
    *   **L4 (Transport)**: Routes based on IP+Port. Fast. Packet level.
    *   **L7 (Application)**: Routes based on URL/Headers. Smart (e.g., \`/video\` -> VideoCluster). SSL Termination.`,
        interviewQuestions: [
            { question: "How does LB handle server failure?", answer: "Health Checks (Heartbeat). The LB periodically pings servers. If 3 pings fail, it marks server as Dead and stops routing traffic there.", companies: ["Cloudflare"] },
            { question: "Unique: What is the 'Thundering Herd' problem in Load Balancing?", answer: "When a service comes back online after failure, or a cache clears, all waiting requests hit it instantly, causing it to crash again. Rate limiting and exponential backoff help prevent this.", companies: ["Facebook"] }
        ]
    },
    '6.4-cap': {
        title: 'CAP & PACELC',
        visualizerType: 'cap-theorem',

        oneLinerAnswer: "CAP: Choose 2 of 3 (Consistency, Availability, Partition Tolerance). PACELC extends CAP: If Partition, choose A/C. Else (Normal), choose Latency/Consistency.",
        why: "To make trade-offs. You can't have a database that is instant, always consistent, and never fails.",
        tradeoffs: [
            "CP (HBase): System goes down if net breaks (Consistency over Availability).",
            "AP (Cassandra): System stays up but might return old data (Availability over Consistency)."
        ],
        failureCases: [
            "Network Partition: The cable is cut. One side of the cluster can't talk to the other.",
            "Stale Read: User posts a comment, refreshes page, and it's gone (AP system)."
        ],
        realWorldUsage: "Designing the checkout flow (CP) vs comments section (AP).",

        content: `### CAP Theorem
In a distributed system, you can only pick 2 out of 3:
1.  **C - Consistency**: Every read receives the most recent write or an error.
2.  **A - Availability**: Every request receives a (non-error) response, without guarantee that it contains the most recent write.
3.  **P - Partition Tolerance**: The system continues to operate despite network messages being dropped/delayed.

*   *Reality*: P is unavoidable in distributed systems. So you choose **CP** (Consistency/DBs) or **AP** (Availability/Cassandra).

### PACELC Theorem
Extension of CAP.
*   "If there is a Partition (**P**), how does the system trade off **A** and **C**?"
*   "**E**lse (**E**), (no partition), how does the system trade off **L**atency (**L**) and **C**onsistency (**C**)?"
*   *Ex*: DynamoDB allows tuning this (Strong vs Eventual Consistency).`,
        interviewQuestions: [
            { question: "Is SQL always CP?", answer: "Usually yes (ACID). But with async Master-Slave replication, it becomes AP (Eventual Consistency).", companies: ["Amazon"] },
            { question: "How to achieve 100% Availability?", answer: "You cannot. But you can approach 99.999% (Five Nines) by using Geo-Redundancy (Active-Active) across multiple regions.", companies: ["Google SRE"] },
            { question: "Unique: CAP theorem says pick 2. But can I switch dynamically?", answer: "Yes! Systems like CosmosDB/DynamoDB allow you to choose Consistency levels per-query. You can ask for Strong Consistency (slower, less available) for billing and Eventual Consistency (fast, highly available) for comments.", companies: ["AWS"] }
        ]
    },
    '6.6-storage-engines': {
        title: 'B-Trees vs LSM Trees',
        visualizerType: 'btree-diagram',

        oneLinerAnswer: "B-Tree: Read heavy (MySQL). LSM: Write heavy (Cassandra).",
        why: "To optimize IOPS. Spinning disks hate random writes (B-Tree update). They love sequential writes (LSM append).",
        tradeoffs: [
            "Read Amplification (LSM): Reading might need to check multiple SSTables.",
            "Write Amplification (B-Tree): Updating 1 byte might rewrite a whole 4KB page."
        ],
        failureCases: [
            "Compaction Spiral (LSM): System spends 100% CPU merging old files, blocking new writes.",
            "Fragmentation (B-Tree): Empty space in pages wastes disk."
        ],
        realWorldUsage: "RocksDB (LSM), InnoDB (B-Tree).",

        content: `### How Databases Store Data
This is the #1 question for Backend Architects.

#### 1. B+ Trees (Read Optimized)
* **Used by**: MySQL (InnoDB), PostgreSQL, Oracle.
* **Structure**: Balanced Tree. Data is stored only in leaf nodes.
* **Pros**: Ultra-fast Reads/Range scans ($O(\log N)$).
* **Cons**: Random Writes are slow (must rebalance tree on insert).

#### 2. LSM Trees (Log-Structured Merge) - Write Optimized
* **Used by**: Cassandra, RocksDB, HBase.
* **Logic**:
    1.  Writes go to an in-memory buffer (MemTable).
    2.  Flushed to disk as immutable files (SSTables).
    3.  Background process "Compacts" (merges) files later.
* **Pros**: Blazing fast Writes (Append-only).
* **Cons**: Slower Reads (might need to check multiple files).`,
        interviewQuestions: [
            { question: "Why does Cassandra write faster than MySQL?", answer: "Cassandra uses LSM Trees. Writes are just appending to a log (Sequential I/O). MySQL uses B+ Trees, which require random I/O to update the tree structure.", companies: ["Uber", "Facebook"] },
            { question: "Unique: If LSM Trees are so fast, why don't we use them everywhere?", answer: "Read Amplification. To read a key, you might have to check MemTable + L0 SSTable + L1 SSTable... It's slower than B-Tree lookups. Also, Compaction burns CPU.", companies: ["Database Internals"] }
        ]
    },
    '6.6-caching-deep': {
        title: 'Caching Strategies & Eviction',
        visualizerType: 'cache-strategies',

        oneLinerAnswer: "Strategies: Read-Through, Write-Through, Write-Back. Eviction: LRU (Least Recently Used), LFU (Least Frequently Used).",
        why: "RAM is fast but small. Disk is slow but big. We need to keep 'Hot' data in RAM.",
        tradeoffs: [
            "Write-Through vs Write-Back: Through is safe (sync to DB). Back is fast (async/batch) but risks data loss.",
            "LRU vs LFU: LRU is simple. LFU is better for long-term popularity but complex."
        ],
        failureCases: [
            "Cache Stampede: Cache clears, 1M users hit DB.",
            "Stale Data: Cache says 'In Stock', DB says 'Sold Out'."
        ],
        realWorldUsage: "Redis (LRU default), CPU L1/L2 Cache.",

        content: `### Keep it Fast
1.  **Cache Aside (Lazy Loading)**: App checks Cache. If miss, reads DB, updates Cache.
    * *Pros*: Resilient to cache failure.
    * *Cons*: Stale data potential. First request is slow.
2.  **Write Through**: App writes to Cache, Cache writes to DB (Sync).
    * *Pros*: Data consistency.
    * *Cons*: Slow writes.
3.  **Write Back (Write Behind)**: App writes to Cache. Cache flushes to DB async.
    * *Pros*: Ultra-fast writes.
    * *Cons*: Data loss if Cache crashes before flush.

#### Eviction Policies
* **LRU (Least Recently Used)**: Remove the item not used for the longest time. (Standard).
* **LFU (Least Frequently Used)**: Remove item with fewest hits. (Good for stable access patterns).`,
        interviewQuestions: [
            { question: "Cache Aside vs Write Through?", answer: "Cache Aside is better for read-heavy systems and resilience (if cache dies, DB still works). Write Through ensures stronger consistency but has higher write latency.", companies: ["Facebook"] },
            { question: "How to handle Thundering Herd?", answer: "When a popular cache key expires, thousands of requests hit the DB at once. Fix: Use a Mutex (Lock) so only one thread recomputes the cache, or use 'Probabilistic Early Expiration'.", companies: ["Reddit", "Twitter"] },
            { question: "Unique: What is Cache Penetration?", answer: "When a hacker requests keys that don't exist (e.g., id=-1). The cache misses, so the DB is hit. Since it doesn't exist, it's never cached. The DB dies. Fix: Cache 'null' or use a Bloom Filter.", companies: ["Security"] }
        ]
    },
    '6.6-cdn': {
        title: 'CDNs & Edge Computing',

        oneLinerAnswer: "Content Delivery Network. Chaching static assets (Images/Video) physically closer to the user.",
        why: "Speed of Light. Data traveling from USA to India takes 200ms. From Mumbai to Mumbai takes 5ms.",
        tradeoffs: [
            "Static vs Dynamic: CDNs differ at static. Dynamic (API) acceleration needs magical routing.",
            "Cost: Bandwidth costs adds up."
        ],
        failureCases: [
            "Cache Miss: If CDN doesn't have it, it fetches from Origin (Slow).",
            "DDoS: If CDN is bypassed, Origin melts."
        ],
        realWorldUsage: "Cloudflare, Akamai, Netflix Open Connect.",

        content: `### Beating the Speed of Light
Solving latency by moving static data closer to the user.
* **Push CDN**: You upload content to the CDN manually.
* **Pull CDN**: CDN fetches from Origin on first request, then caches it.

#### Edge Computing
Running logic (not just caching) on CDN nodes.
* *Ex*: AWS Lambda @ Edge.
* *Use Case*: Image resizing, Authentication, A/B Testing routing closer to user.`,
        interviewQuestions: [
            { question: "Push vs Pull CDN?", answer: "Push: You act as the uploader. Good for small, infrequent files. Pull: The CDN grabs it from your server on first miss. Good for viral content.", companies: ["Akamai"] },
            { question: "Unique: How does a CDN know which edge server is closest to me?", answer: "Anycast DNS. The same IP address is advertised from multiple locations. BGP routing directs your request to the topologically nearest server.", companies: ["Cloudflare"] }
        ]
    },

    // --- 6.7 Advanced Data Patterns ---
    '6.7-bloom': {
        title: 'Bloom Filters & HyperLogLog',
        visualizerType: 'bloom-filter',

        oneLinerAnswer: "Probabilistic Data Structures. Bloom: 'Definitely No' or 'Maybe Yes'. HLL: Approximate Count (Cardinality).",
        why: "Space efficiency. Storing 1 billion user IDs takes GBs. Bloom Filter takes MBs.",
        tradeoffs: [
            "Accuracy vs Space: 1% error rate is fine for 'Recommended Videos' but bad for 'Bank Balance'.",
            "No Deletion: You can't remove items from a standard Bloom Filter."
        ],
        failureCases: [
            "Saturation: If filter gets too full, everything becomes 'Maybe Yes' (False positive rate spikes).",
            "False Positive: Saying a URL is malicious when it's safe."
        ],
        realWorldUsage: "Google Chrome (Malicious URL check), Medium (Article view count).",

        content: `### Probabilistic Data Structures
Trading accuracy for massive memory savings.

#### Bloom Filter
* **Question**: "Does this element exist in the set?"
* **Answer**: "Possibly Yes" OR "Definitely No".
* **Mechanism**: Hash(Item) -> Set bits in array.
* **Use Case**: Checking if a username is taken (before hitting DB). Browsers checking malicious URLs.

#### HyperLogLog (Count-Min Sketch)
* **Question**: "How many unique visitors (Cardinality) today?"
* **Mechanism**: Uses hash bit patterns to estimate count with <1% error using only KB of memory.
* **Use Case**: Redis \`PFCOUNT\`. Big Data analytics.`,
        interviewQuestions: [
            { question: "Where are Bloom Filters used in Databases?", answer: "To avoid disk reads for non-existent keys. Before checking the LSM Tree (on disk), Cassandra checks the in-memory Bloom Filter. If it returns 'No', disk I/O is saved.", companies: ["Cassandra", "Google BigTable"] },
            { question: "Unique: Can I delete an item from a Standard Bloom Filter?", answer: "No! Because bits are shared. Resetting a bit for 'Item A' might accidentally delete 'Item B'. You need a Counting Bloom Filter (using counters instead of bits) to support deletion.", companies: ["Advanced Algo"] }
        ]
    },
    '6.7-spatial': {
        title: 'Geo-Spatial Indexes (QuadTree)',
        visualizerType: 'quadtree',

        oneLinerAnswer: "QuadTree (Recursive 4-split), GeoHash (String prefix), K-D Tree.",
        why: "To find 'Drivers near me'. Standard B-Tree can't index 2D (Lat/Lon) efficiently.",
        tradeoffs: [
            "Update Cost: Moving drivers (Uber) require constant re-indexing.",
            "Edge Cases: Grid boundary issues (driver is across the street but in different grid)."
        ],
        failureCases: [
            "Skewed Data: All users in NYC, none in Kansas. Unbalanced tree.",
            "High Velocity: 1 million updates/sec melts the index."
        ],
        realWorldUsage: "Uber, Google Maps, Yelp.",

        content: `### "Find drivers near me"

#### 1. Geohash
        * Divide world into a grid.Encode grid cells into base- 32 strings.
* ** Logic **: "u4pruyd..." -> Specific block in San Francisco.
* ** Search **: Find users with matching string prefix.

#### 2. QuadTree
    * Tree structure.Each node has 4 children(NW, NE, SW, SE).
* Recursively split regions until a bucket has < N points.
* ** Pros **: Dynamically adjusts to density(High resolution in Cities, Low in Desert).`,
        interviewQuestions: [
            { question: "Why not standard SQL index on Lat/Lon?", answer: "Because 'near' requires 2D range search. Standard indexes are 1D. You'd have to scan all rows with Lat > X, then filter Lon.", companies: ["Uber", "Lyft"] },
            { question: "Unique: How does Google Maps calculate paths so fast?", answer: "They don't run Dijkstra on the raw graph (too big). They use **Contraction Hierarchies** (pre-computing shortcuts for highways) or A* Algorithm with landmarks.", companies: ["Google Maps"] }
        ]
    },
    '6.7-consensus': {
        title: 'Consensus (Paxos/Raft)',

        oneLinerAnswer: "Algorithms to get distributed nodes to agree on a value (Leader Election). Raft is easier Paxos.",
        why: "If Master dies, who is the new Master? We need a vote.",
        tradeoffs: [
            "Latency: Consensus requires RTT to majority nodes (Slow).",
            "Availability: If majority is down, system stops."
        ],
        failureCases: [
            "Split Vote: No one gets majority (Raft handles this with random timeouts).",
            "Byzantine Fault: A malicious node lies (Paxos/Raft assume honest nodes)."
        ],
        realWorldUsage: "Etcd (Kubernetes), Zookeeper (Kafka), Spanner.",

        content: `### Getting Everyone to Agree
How do 5 nodes agree on "Who is the Leader" or "What is the current value" ?

#### Raft(Understandable Consensus)
1. ** Leader Election **: Nodes vote.If Leader dies, new election starts.
2. ** Log Replication **: Leader accepts Write -> Sends to Followers -> Waits for Majority(Quorum) -> Commits.
* ** Quorum **: N / 2 + 1.(5 nodes need 3 acks).
* ** Split Brain **: If network partitions, the minority side cannot commit(ensures safety).`,
        interviewQuestions: [
            { question: "Paxos vs Raft?", answer: "Functionally equivalent (Consensus). Paxos is extremely difficult to understand and implement correctly. Raft was designed specifically for understandability (Leader Election / Log Replication split).", companies: ["Etcd", "Kubernetes"] },
            { question: "Unique: Is Blockchain just Distributed Consensus?", answer: "Yes, but with a twist. Paxos/Raft assume nodes are non-malicious (Crash Fault Tolerance). Blockchain (PoW/PoS) handles malicious nodes (Byzantine Fault Tolerance) where a node might lie.", companies: ["Crypto"] }
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

const systemDesignData = {
    id: 'system-design',
    hierarchy: hierarchy,
    topics: flatten(hierarchy)
};

export default systemDesignData;
