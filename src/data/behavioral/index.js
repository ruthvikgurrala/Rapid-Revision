const hierarchy = [
    {
        id: '5.1-intro',
        title: '5.1 Introduction',
        children: [
            { id: '5.1-self', title: 'Tell me about yourself' },
            { id: '5.1-why', title: 'Why us? / Why leave?' }
        ]
    },
    {
        id: '5.2-projects',
        title: '5.2 Project Deep Dives',
        children: [
            { id: '5.2-challenge', title: 'Technical Challenges' },
            { id: '5.2-mistake', title: 'Mistakes & Failures' }
        ]
    },
    {
        id: '5.3-situational',
        title: '5.3 Situational (STAR)',
        children: [
            { id: '5.3-conflict', title: 'Conflict Resolution' },
            { id: '5.3-leadership', title: 'Leadership & Initiative' },
            { id: '5.3-pressure', title: 'Working under Pressure' }
        ]
    },
    {
        id: '5.4-design',
        title: '5.4 System Design Basics',
        children: [
            { id: '5.4-scale', title: 'Scalability (Vertical vs Horizontal)' },
            { id: '5.4-lb', title: 'Load Balancing & Caching' },
            { id: '5.4-db-choice', title: 'SQL vs NoSQL Selection' }
        ]
    },
    {
        id: '5.5-senior',
        title: '5.5 Senior Leadership',
        children: [
            { id: '5.5-ambiguity', title: 'Handling Ambiguity' },
            { id: '5.5-mentor', title: 'Mentorship & Influence' }
        ]
    }
];

const contentMap = {
    // 5.1 Intro
    '5.1-self': {
        title: 'Tell Me About Yourself',
        content: `### The Elevator Pitch
This is your first impression. Keep it **chronological** and **relevant**.

#### Structure (Present -> Past -> Future)
1.  **Current Role**: "I am currently a Senior Software Engineer at X, working on scaling backend systems..."
2.  **Past Experience**: "Previously, I worked at Y, where I built Z using React and Node.js..."
3.  **Future/Why Here**: "I am looking for a role where I can tackle larger distributed system challenges, which is why I'm excited about this opportunity."

**Tip**: Keep it under 2 minutes. Don't recite your resume line-by-line.`,
        interviewQuestions: [
            { question: "Tell me about yourself.", answer: "Structure: 1. Present Role (What relevant thing I do now). 2. Past (Key achievements that led me here). 3. Future (Why I want *this* job). Keep it < 2 mins.", companies: ["HR Round"] }
        ]
    },
    '5.1-why': {
        title: 'Why Us? / Why Leave?',
        content: `### The Motivation
*   **Why Us?**: Show you've done research. Mention specific products, culture, or engineering blogs.
    *   *Good*: "I saw your tech blog post about migrating to GraphQL, and I love working with graph data..."
    *   *Bad*: "I need a job."
*   **Why Leave?**: Always be positive. Run **Towards** something, not **Away**.
    *   *Good*: "I'm looking for more ownership and mentorship..."
    *   *Bad*: "My manager is terrible."`,
        interviewQuestions: [
            { question: "Why do you want to work here?", answer: "Don't say 'Good salary'. Say: 'I admire your [Specific Product/Challenge]. My background in [Skill] aligns perfectly with your mission to [Goal].'", companies: ["HR Round"] },
            { question: "Why are you leaving your current job?", answer: "Never badmouth. Frame it as 'seeking growth' or 'new challenges' that your current role cannot provide (e.g., larger scale, different tech stack).", companies: ["HR Round"] }
        ]
    },

    // 5.2 Projects
    '5.2-challenge': {
        title: 'Technical Challenges',
        visualizerType: 'star-method',
        content: `### The "Hardest Bug" Question
Use the **STAR Method** (Situation, Task, Action, Result).

#### Example: Slow API Endpoint
*   **Situation**: "Our checkout API was taking 3 seconds, causing cart abandonment."
*   **Task**: "I needed to reduce latency to under 500ms."
*   **Action**: "I profiled the code, found an N+1 query issue in the ORM. I rewrote it using raw SQL joins and added a Redis cache layer."
*   **Result**: "Latency dropped to 120ms, and conversions increased by 15%."`,
        interviewQuestions: [
            { question: "What was your most challenging technical project?", answer: "Choose a project where YOU had impact. Focus on the complexity (Scale, Concurrency, Legacy code) and your specific contribution.", companies: ["Amazon", "Google"] }
        ]
    },
    '5.2-mistake': {
        title: 'Mistakes & Failures',
        content: `### Interpreting Failure
They want to see **Integrity** and **Growth**.

#### Example: Production Outage
*   **Situation**: "I deployed a change that crashed the payment service."
*   **Task**: "Restore service and prevent recurrence."
*   **Action**: "I immediately rolled back. Then I debugged the root cause (missing config var). I added a pre-commit hook and updated the CI/CD pipeline to check for config validation."
*   **Result**: "The issue never happened again, and deployment confidence increased."
*   **Key**: Don't blame others. Own it. Fix it. Learn from it.`,
        interviewQuestions: [
            { question: "Tell me about a time you failed.", answer: "Pick a real failure, but one where you learned. 1. Fail fast. 2. Fix it. 3. Systemize the fix (Added tests, improved docs) so it never happens again.", companies: ["Amazon (Ownership)"] }
        ]
    },

    // 5.3 Situational
    '5.3-conflict': {
        title: 'Conflict Resolution',
        content: `### "Tell me about a conflict with a coworker"
Focus on **Collaborative Resolution**.

*   **Situation**: "My PM wanted feature X, but I knew it would cause tech debt."
*   **Action**: "Instead of just saying no, I created a doc outlining the pros/cons and estimated the future cost. I proposed a compromise (Feature Y) that met the user need but was cleaner."
*   **Result**: "We agreed on Y. The feature launched on time with stable code."
*   **Key**: Empathy + Data > Ego.`,
        interviewQuestions: [
            { question: "Tell me about a conflict with a coworker.", answer: "Focus on the 'Idea' conflict, not 'Personal'. Show how you used Data to resolve it. 'We had different approaches, so I built a prototype/doc to compare pros and cons...'.", companies: ["Google", "Facebook"] }
        ]
    },
    '5.3-leadership': {
        title: 'Leadership & Initiative',
        content: `### "Tell me about a time you took ownership"
You don't need a manager title to lead.

*   **Example**: "I noticed our onboarding docs were outdated. I voluntarily spent a Friday updating them and created a 'Buddy System' for new hires. This reduced ramp-up time by 2 weeks."`,
        interviewQuestions: [
            { question: "Describe a time you showed initiative.", answer: "Don't pick a assigned task. Pick something you 'saw and fixed' without being asked. E.g., Automating a manual process, Fixing a broken test suite, Documenting a legacy module.", companies: ["Amazon (Bias for Action)"] }
        ]
    },
    '5.3-pressure': {
        title: 'Working Under Pressure',
        content: `### "Tell me about a tight deadline"
Focus on **Prioritization** and **Communication**.

*   **Action**: "I scoped down the features to the absolute MVP. I communicated the risks early to stakeholders. I automated the manual testing part to save time."
*   **Result**: "We delivered the core value on time, and added the 'nice-to-haves' in the next sprint."`,
        interviewQuestions: [
            { question: "How do you handle tight deadlines?", answer: "1. Prioritize (Cut scope, keep quality). 2. Communicate (Manage expectations early). 3. Focus (Block distractions). NEVER say 'I just worked 20 hours a day'—that shows poor planning.", companies: ["Uber", "Startup"] }
        ]
    },

    // --- 5.4 System Design Basics ---
    '5.4-scale': {
        title: 'Scalability: Vertical vs Horizontal',
        visualizerType: 'scaling-diagram',
        content: `### The First Question in Design
"How do we handle 10x traffic?"

#### 1. Vertical Scaling (Scale Up)
* **Logic**: Buy a bigger machine (More RAM, More CPU).
* **Pros**: Simple. No code changes needed.
* **Cons**: Expensive. Hardware limit (Finite RAM). Single Point of Failure.
* **Use Case**: Small DBs, Internal tools.

#### 2. Horizontal Scaling (Scale Out)
* **Logic**: Buy more cheap machines (Nodes) and distribute the load.
* **Pros**: Infinite scale. Resilient (if one node dies, others take over).
* **Cons**: Complex. Needs Load Balancers and stateless apps.
* **Use Case**: Web Servers, Distributed DBs (Cassandra, MongoDB).`,
        interviewQuestions: [
            { question: "When would you choose Vertical over Horizontal?", answer: "When the traffic load is predictable and data consistency is critical (e.g., a SQL monolithic DB is easier to manage vertically than sharding it horizontally).", companies: ["Google", "Meta"] }
        ]
    },
    '5.4-lb': {
        title: 'Load Balancing & Caching',
        content: `### Traffic Cop & Memory Speed
#### Load Balancer (LB)
Sits between User and Server. Distributes traffic.
* **Algorithms**:
    * *Round Robin*: 1, 2, 3, 1, 2, 3... (Simple).
    * *Least Connections*: Send to server with fewest active users (Smart).
    * *IP Hash*: User A always goes to Server 1 (Sticky Sessions).

#### Caching
"Don't compute the same thing twice."
* **Write-Through**: Write to DB and Cache same time (Slow write, Safe data).
* **Write-Back**: Write to Cache, update DB later (Fast write, Risk of data loss).
* **Eviction**: LRU (Least Recently Used) is the standard.`,
        interviewQuestions: [
            { question: "Where can you place a cache?", answer: "Everywhere. Browser (Client), CDN (Edge), API Gateway, or Database (Redis/Memcached).", companies: ["Amazon"] }
        ]
    },
    '5.4-db-choice': {
        title: 'SQL vs NoSQL Selection',
        content: `### The Trade-off (CAP Theorem)
Do not say "NoSQL is faster." Say "It depends on the access pattern."

#### SQL (Relational) - MySQL, PostgreSQL
* **Structure**: Tables, Rows, Foreign Keys.
* **ACID**: Strong consistency. Transactions are safe.
* **When to use**: Financial systems, complex queries, structured data.

#### NoSQL (Non-Relational) - MongoDB, Cassandra
* **Structure**: JSON Documents, Key-Value pairs.
* **BASE**: Eventual consistency. High availability.
* **When to use**: Real-time analytics, Social media feeds, IoT sensor data (massive writes).`,
        interviewQuestions: [
            { question: "Design Twitter. SQL or NoSQL?", answer: "Hybrid. User Profile/Auth = SQL (Strict). The Tweet Feed = NoSQL (Fast, structure changes, eventual consistency is okay).", companies: ["Twitter", "System Design"] }
        ]
    },

    // --- 5.5 Senior Leadership ---
    '5.5-ambiguity': {
        title: 'Handling Ambiguity',
        content: `### "The Manager gave me a vague goal..."
L3 Engineers define the task; they don't just execute it.

* **Situation**: "The business said 'We need to improve search relevance', but didn't define 'relevance'."
*   **Action**: "I set up a meeting with Product to define KPIs (Click-Through Rate). I broke the vague goal into 3 concrete milestones: 1) Instrument logging, 2) A/B test new algorithm, 3) Rollout."
*   **Result**: "We didn't just 'improve search', we increased CTR by 8%."`,
        interviewQuestions: [
            { question: "How do you handle ambiguous requirements?", answer: "I Proactively engage stakeholders to clarify. I create a Design Doc with assumptions and get sign-off. I break the problem into smaller, validated experiments.", companies: ["Meta (E5+)", "Google"] }
        ]
    },
    '5.5-mentor': {
        title: 'Mentorship & Influence',
        content: `### "Tell me about a time you mentored someone"
Show you elevate the team, not just yourself.

* **Situation**: "A Junior dev was merging buggy code because they didn't understand our testing framework."
*   **Action**: "Instead of just saying no, I created a 'Testing Best Practices' wiki for the team. I didn't type; I let them drive."
*   **Result**: "They became independent within a month, and the team's bug rate dropped."`,
        interviewQuestions: [
            { question: "Tell me about a time you mentored someone.", answer: "Don't just say 'I answered their questions'. Say 'I helped them grow'. 'I noticed X was struggling with Y, so I set up pair programming sessions and gave code review feedback focusing on design patterns'.", companies: ["Senior Dev"] }
        ]
    }
};

const flatten = (items) => {
    let flat = [];
    items.forEach(item => {
        if (item.children) {
            flat = flat.concat(flatten(item.children));
        } else {
            flat.push({ ...item, ...contentMap[item.id] });
        }
    });
    return flat;
};

const behavioralData = {
    id: 'behavioral',
    hierarchy: hierarchy,
    topics: flatten(hierarchy)
};

export default behavioralData;
