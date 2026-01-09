const hierarchy = [
    {
        id: '2.1-intro',
        title: '2.1 Introduction & Architecture',
        children: [
            { id: '2.1-basics', title: 'Basics (File vs DBMS)' },
            { id: '2.1-architecture', title: '3-Schema Architecture' },
            { id: '2.1-independence', title: 'Data Independence' },
            { id: '2.1-models', title: 'Data Models (ER, Relational)' }
        ]
    },
    {
        id: '2.2-relational',
        title: '2.2 Relational Model & Keys',
        children: [
            { id: '2.2-concepts', title: 'Concepts (Tuple, Attribute)' },
            { id: '2.2-keys', title: 'Keys (Primary, Candidate, Foreign)' }, // Merged for cleaner UI
            { id: '2.2-integrity', title: 'Integrity Constraints' }
        ]
    },
    {
        id: '2.3-sql',
        title: '2.3 SQL',
        children: [
            { id: '2.3-ddl', title: 'DDL (Create, Alter, Drop)' },
            { id: '2.3-dml', title: 'DML (Insert, Update, Delete)' },
            { id: '2.3-dcl-tcl', title: 'DCL & TCL' },
            { id: '2.3-joins', title: 'Joins (Inner, Outer, Cross)' },
            { id: '2.3-advanced', title: 'Advanced (Group By, Views)' }
        ]
    },
    {
        id: '2.4-design',
        title: '2.4 Database Design',
        children: [
            { id: '2.4-anomalies', title: 'Anomalies' },
            { id: '2.4-normalization', title: 'Normalization (1NF - BCNF)' }
        ]
    },
    {
        id: '2.5-transactions',
        title: '2.5 Transaction Management',
        children: [
            { id: '2.5-acid', title: 'ACID Properties' },
            { id: '2.5-schedules', title: 'Schedules' },
            { id: '2.5-concurrency', title: 'Concurrency Control (Locks, 2PL)' }
        ]
    },
    {
        id: '2.6-nosql',
        title: '2.6 NoSQL',
        children: [
            { id: '2.6-types', title: 'Types (Key-Value, Doc, Graph)' },
            { id: '2.6-cap', title: 'CAP Theorem & BASE' }
        ]
    },
    {
        id: '2.7-advanced-sql',
        title: '2.7 Advanced SQL Patterns',
        children: [
            { id: '2.7-window', title: 'Window Functions (RANK, LEAD)' },
            { id: '2.7-cte', title: 'CTEs & Recursive Queries' }
        ]
    },
    {
        id: '2.8-internals',
        title: '2.8 Storage & Internals',
        children: [
            { id: '2.8-btrees', title: 'B-Trees vs LSM Trees' },
            { id: '2.8-scaling', title: 'Sharding & Replication' }
        ]
    }
];

const contentMap = {
    // 2.1 Intro
    '2.1-basics': {
        title: 'Basics: File System vs DBMS',

        oneLinerAnswer: "DBMS manages data centrally with ACID properties, solving File System issues like Redundancy and Inconsistency.",
        why: "File systems (txt/csv) are hard to query, have duplicate data, and cannot handle concurrent writes safely.",
        tradeoffs: [
            "Cost: DBMS (Oracle/SQL Server) is expensive and heavy. Files are free and simple.",
            "Complexity: Setting up a DB cluster requires expertise. Files just need fopen()."
        ],
        failureCases: [
            "Data Anomaly: Two users update address, only one saves (Lost Update).",
            "Security: Hard to restrict access to specific columns in a file."
        ],
        realWorldUsage: "SQLite (App storage), PostgreSQL (Enterprise).",

        content: `### 1. Data vs Information
*   **Data**: Raw, unprocessed facts and figures. It has no meaning on its own.
    *   *Example*: \`[25, "Ruthvik", True]\`
*   **Information**: Data that has been processed, organized, and structured to provide context and meaning.
    *   *Example*: "Ruthvik is 25 years old and currently Employed."

### 2. The Evolution: File System vs DBMS
Before modern Databases, organizations used **File Processing Systems** where each department stored its own data in flat files (txt, csv).

#### The File System Pitfalls
1.  **Data Redundancy**: The same data (e.g., Student Name) is stored in the Library file, Accounts file, and Registrar file. A change in one isn't reflected in others.
2.  **Data Inconsistency**: Due to redundancy, you might be "Active" in the Registrar file but "Graduated" in the Library file.
3.  **Difficulty in Access**: Writing a new C++/Java program for every new search query ("Find students > 20, GPA > 3.5") is impractical.
4.  **Concurrent Access Anomalies**: What happens if two people try to write to the file at the exact same millisecond? File systems often lock the *entire* file.

#### The DBMS Solution
A **Database Management System (DBMS)** is software that manages data efficiently and solves the above problems.

| Feature | File System | DBMS |
| :--- | :--- | :--- |
| **Redundancy** | High (Duplicate data everywhere). | Controlled (Normalization). |
| **Consistency** | Hard to maintain. | Automatic (ACID properties). |
| **Querying** | Requires writing application programs. | Simple SQL Queries (\`SELECT * ...\`). |
| **Security** | VS Level (File permissions). | Fine-grained (Table/Row/Column level). |
| **Recovery** | If system crashes during write, file is corrupted. | Log-based recovery prevents data loss.`,
        code: {
            text: `Structure of DBMS:
Users -> SQL Query -> Query Optimizer -> Execution Engine -> Storage Manager -> Disk.`
        },
        interviewQuestions: [
            { question: "When should you use a File System over a DBMS?", answer: "Use a File System when: 1. Data is static/read-only. 2. Application is simple. 3. No multi-user access is required. 4. You need raw speed for sequential access (e.g., storing video files or backups).", companies: ["Netflix", "Dropbox"] },
            { question: "What is Metadata?", answer: "Data about data. In a DBMS, it describes the structure (Schema, Tables, Constraints) and is stored in the Data Dictionary.", companies: ["Oracle"] },
            { question: "Who interacts with the Physical Level?", answer: "System Administrators and Database Administrators (DBAs), for tuning performance and storage.", companies: ["IBM"] },
            { question: "Unique: If DBMS is so great, why does git use a File System?", answer: "Git is a **Content Addressable File System**. It doesn't need complex queries or joins. It needs raw speed, immutability, and simple key-value lookups (SHA-1). A DBMS implies overhead for ACID that Git doesn't strictly need in the same way.", companies: ["GitHub"] }
        ]
    },
    '2.1-architecture': {
        title: '3-Schema Architecture',
        visualizerType: 'dbms-architecture',

        oneLinerAnswer: "Separates the DB into 3 levels: External (User View), Conceptual (Logical Tables), and Internal (Physical Storage).",
        why: "To achieve Data Independence. The DBA can change the storage (HDD to SSD) without breaking the User's SQL queries.",
        tradeoffs: [
            "Abstraction vs Performance: More layers = more translation overhead.",
            "Complexity: Maintaining 3 mappings is hard for simple apps."
        ],
        failureCases: [
            "Leaky Abstraction: If physical performance issues (indexes) affect the logical query design.",
            "Schema Drift: Views get out of sync with underlying tables."
        ],
        realWorldUsage: "SQL Views (External), CREATE TABLE (Conceptual), B-Tree (Internal).",

        content: `### The Goal: Data Independence
The Three-Schema Architecture was introduced to separate the **user applications** from the **physical database**. This ensures that changes in how data is stored do not break the code that uses requirements.

### 1. External Level (The "View")
*   **Who**: End Users, Application Programmers.
*   **What**: Describes *only the part* of the database relevant to a specific user.
*   **Example**: The HR Manager sees a view with "Salary", but the Intern's view hides that column.
*   **Defined by**: External Schema.

### 2. Conceptual Level (The "Logic")
*   **Who**: Database Designers (DBA).
*   **What**: Describes **what** data is stored and the relationships between them. Logic structure only.
*   **Content**: Entities, Data Types, Relationships, Constraints.
*   **Example**: "Student table has ID (int), Name (string)". Hides *how* it is stored.
*   **Defined by**: Conceptual Schema (ER Diagram).

### 3. Physical Level (The "Storage")
*   **Who**: System Admis / Low-level DBA.
*   **What**: Describes **how** the data is actually stored on the drive.
*   **Content**: B-Tree indexing, hashing algorithms, block sizes, RAID levels, encryption.
*   **Defined by**: Physical Schema.`,
        code: {
            sql: `-- Conceptual View (Logical)
CREATE TABLE Student (ID int, Name text);

-- External View (What User Sees)
CREATE VIEW StudentNames AS SELECT Name FROM Student;

-- Physical View (Hidden)
-- Stored in blocks of 4KB, Indexed via B+ Tree.`
        },
        interviewQuestions: [
            { question: "Why do we need 3 layers?", answer: "To achieve Data Independence. We want to be able to change the hard drive (Physical) without rewriting the SQL schema (Conceptual). We want to add a new column (Conceptual) without breaking the existing User Views (External).", companies: ["Oracle"] },
            { question: "Unique: Does 'SELECT *' violate Data Independence?", answer: "In a way, YES. If the conceptual schema changes (column added), 'SELECT *' returns different data, potentially breaking the application code expecting strict column indices. Always specify columns!", companies: ["Senior Engineer Interview"] }
        ]
    },
    '2.1-independence': {
        title: 'Data Independence',

        oneLinerAnswer: "Logical: Changing Schema (adding columns) doesn't break View. Physical: Changing Storage (Hash to B-Tree) doesn't break Schema.",
        why: "We don't want to rewrite the iPhone App code just because we moved the database from HDD to NVMe.",
        tradeoffs: [
            "Flexibility vs Optimization: Hiding physical details prevents the app from micro-optimizing byte access.",
            "Maintenance: Adding a column is easy (Logical), but renaming it breaks bad code."
        ],
        failureCases: [
            "Breaking Change: Renaming a table breaks all queries (Fail of Logical Independence).",
            "Performance Regression: Changing index type slows down queries invisible to the developer."
        ],
        realWorldUsage: "ALTER TABLE ADD COLUMN...",

        content: `### The Power of Abstraction
Data Independence is the ability to modify a schema definition in one level without affecting the schema definition in the next higher level.

#### 1. Logical Data Independence
*   **Definition**: The capacity to change the **Conceptual Schema** without changing the **External Schema** (or application programs).
*   **Scenario**: We determine the system needs to store a student's \`BirthDate\`.
*   **Action**: We \`ALTER TABLE Students ADD BirthDate date;\`
*   **Impact**: Old applications that used \`SELECT Name FROM Students\` **do not break**. They simply ignore the new column.
*   **Difficulty**: Harder to achieve because apps are often tightly coupled to logical structures.

#### 2. Physical Data Independence
*   **Definition**: The capacity to change the **Physical Schema** without changing the **Conceptual Schema**.
*   **Scenario**: The database is slow, so we switch from a Linear Search to a **B+ Tree Index**, or move data from HDD to SSD.
*   **Action**: Internal storage reorganization.
*   **Impact**: The logical schema (Tables) remains identical. The user's SQL queries run exactly the same (just faster).
*   **Difficulty**: Easier to achieve; handled entirely by the DBMS engine.`,
        code: {
            text: `Hierarchy of Change Impact:
Physical Change -> (Absorbed by Mapping) -> Conceptual Unchanged.
Conceptual Change -> (Absorbed by View Mapping) -> External Unchanged.`
        },
        interviewQuestions: [
            { question: "Which independence is harder to achieve?", answer: "Logical Data Independence is harder because application programs are heavily dependent on the logical structure (columns, types) of the data. Physical changes are usually transparent to the app.", companies: ["Microsoft"] },
            { question: "Physical Data Independence Example?", answer: "Creating a new Index. The SQL query remains exactly the same, but the database engine execution plan changes to use the index for speed.", companies: ["Amazon"] },
            { question: "Unique: Can we achieve Logical Independence in NoSQL?", answer: "Yes! Document stores (MongoDB) are 'Schemaless'. You can add new fields to new documents without breaking code that reads old documents (missing fields are just ignored).", companies: ["MongoDB"] }
        ]
    },
    '2.1-models': {
        title: 'Data Models (ER vs Relational)',
        visualizerType: 'er-diagram',

        oneLinerAnswer: "ER is for Design (Entities/Relationships visual). Relational is for Implementation (Tables/Keys).",
        why: "ER helps stakeholders understand the business rules. Relational maps those rules to math (Set Theory).",
        tradeoffs: [
            "Expressiveness: ER is richer (Weak sets, composite attributes). Relational is flatter.",
            "Impedance Mismatch: OOP classes don't map perfectly to Relational tables (solved by ORM)."
        ],
        failureCases: [
            "Bad Design: M:N relationship implemented without a Join Table.",
            "Over-normalization: Too many small tables making queries slow."
        ],
        realWorldUsage: "Draw.io (ER), MySQL Workbench (Relational).",

        content: `### Organizing the World
A Data Model is a collection of tools for describing data relationships and semantics.

1.  **Hierarchical Model** (The 1960s)
    *   Structure: **Tree** (Parent-Child).
    *   Constraint: A child can have only **one** parent.
    *   Example: Windows File System, XML.
    *   *Drawback*: Difficult to model Many-to-Many relationships.

2.  **Network Model** (The 1970s)
    *   Structure: **Graph**.
    *   Constraint: A child can have **multiple** parents.
    *   *Drawback*: Extremely complex to implement and query.

3.  **Relational Model (RDBMS)** (1970 - Present)
    *   Based on Mathematical Set Theory (E.F. Codd).
    *   Structure: **Tables** (Relations).
    *   Relationships: Maintained via **Keys** (Primary/Foreign).
    *   *Dominance*: SQL is the standard language.

4.  **Entity-Relationship (ER) Model**
    *   Used for **Conceptual Design** (Blueprinting).
    *   **Entity** (Rectangle): Object (Student).
    *   **Attribute** (Oval): Characteristic (Name).
    *   **Relationship** (Diamond): Association (Enrolls).`,
        code: {
            text: `ER Diagram Example:
[Student] --< Enrolls >-- [Course]
   |                         |
(Name, ID)               (Code, Title)`
        },
        interviewQuestions: [
            { question: "Difference between ER Model and Relational Model?", answer: "ER Model is for **Design** (Conceptual). It's a diagram. Relational Model is for **Implementation** (Logical). It's the actual tables. We convert ER Diagrams into Tables.", companies: ["Amazon"] },
            { question: "Unique: Why did Relational Model kill Hierarchical/Network models?", answer: "Data Independence and Simplicity. In Hierarchical, if you moved a node, you broke every program navigating that path. In Relational, you just write 'SELECT * WHERE', and the DBMS figures out the path.", companies: ["History of CS"] }
        ]
    },

    // 2.2 Relational Model
    '2.2-concepts': {
        title: 'Relational Concepts (Tuple, Attribute)',
        oneLinerAnswer: "Table = Relation. Row = Tuple. Column = Attribute. Domain = Data Type.",
        why: "Based on Codd's 12 Rules. Provides a mathematical basis for data storage.",
        tradeoffs: [
            "Structure vs Flexibility: NoSQL allows free-form JSON. Relational enforces strict Schema.",
            "Typing: Strong typing prevents data errors but makes migration hard."
        ],
        failureCases: [
            "NULL Hell: NULL != NULL, causing query bugs.",
            "Data Type Mismatch: Storing dates as strings (sorting fails)."
        ],
        realWorldUsage: "Excel Spreadsheet is a loose approximation.",

        content: `### Theoretical Foundations
The Relational Model organizes data into collections of two-dimensional tables called **Relations**.

#### Core Terminology
*   **Relation**: The Table itself.
*   **Tuple**: A Row (Record). Represents one single entity instance.
*   **Attribute**: A Column (Field). Represents a property of the entity.
*   **Domain**: The set of meaningful values allowed for an attribute (e.g., Integer, Date, "Male/Female").
*   **Schema**: The blueprint. Denoted as $R(A_1, A_2, ... A_n)$.
*   **Instance**: The actual snapshot of data at a specific moment in time.

#### Fundamental Properties
1.  **Atomicity**: Values in a cell must be atomic (indivisible). You cannot store a list \`["Red", "Blue"]\` in a single "Color" cell. (First Normal Form).
2.  **Uniqueness**: No two tuples (rows) can be identical.
3.  **Order Irrelevance**: The order of rows and columns does not matter.
4.  **Distinct Name**: Each attribute must have a unique name within the table.`,
        code: {
            sql: `-- Schema
Student(ID, Name, GPA)

-- Instance (Snapshot)
| ID | Name  | GPA |
|----|-------|-----|
| 1  | Alice | 3.5 |
| 2  | Bob   | 3.8 |`
        },
        interviewQuestions: [
            { question: "What is the Degree and Cardinality?", answer: "Degree = Number of Columns (Attributes). Cardinality = Number of Rows (Tuples). Degree changes rarely (DDL), Cardinality changes frequently (DML).", companies: ["Infosys", "TCS"] }
        ]
    },
    '2.2-keys': {
        title: 'Keys (Primary, Candidate, Foreign)',
        visualizerType: 'dbms-keys',

        oneLinerAnswer: "Primary (Unique ID), Candidate (Potential Primary), Foreign (Link to another table), Super (Any unique set).",
        why: "To uniquely identify rows and establish relationships between tables.",
        tradeoffs: [
            "Natural vs Surrogate Keys: Natural (Email) has meaning but can change. Surrogate (UUID) is safe but meaningless.",
            "Composite Keys: Good for mapping tables, bad for foreign key references."
        ],
        failureCases: [
            "Orphan Record: Deleting a Parent without Cascade Delete leaves Child pointing to nothing.",
            "Duplicate PK: Insert fails."
        ],
        realWorldUsage: "User ID (PK), Order.UserId (FK).",

        content: `### The Usage of Keys
Keys are the backbone of the Relational Model. They ensure uniqueness and establish relationships between tables.

#### 1. Super Key
*   **Definition**: Any set of attributes that can uniquely identify a tuple.
*   *Nuance*: Can contain "extra" redundant attributes.
*   *Example*: If \`ID\` is unique, then \`{ID}\` is a Super Key. \`{ID, Name}\` is also a Super Key. \`{ID, Name, Phone}\` is also a Super Key.

#### 2. Candidate Key
*   **Definition**: A **Minimal** Super Key. If you remove any attribute from it, it loses the ability to be unique.
*   *Example*: \`{ID}\` might be a Candidate Key. \`{Email}\` might be another.
*   *Note*: A table can have multiple Candidate Keys.

#### 3. Primary Key (PK)
*   **Definition**: The **Chosen One**. The Database Designer selects one Candidate Key to be the primary identifier.
*   **Characteristics**: 
    1.  Cannot be NULL.
    2.  Must be unique.
    3.  Should rarely change.

#### 4. Foreign Key (FK)
*   **Definition**: An attribute in one table that refers to the **Primary Key** of another table.
*   **Purpose**: Creates a link between two tables and establishes **Referential Integrity**.`,
        code: {
            sql: `CREATE TABLE Orders (
    OrdID int PRIMARY KEY,
    EmpID int,
    -- EmpID links to the Employees table
    FOREIGN KEY (EmpID) REFERENCES Employees(ID)
);`
        },
        interviewQuestions: [
            { question: "Can a Primary Key be NULL?", answer: "No. This violates the **Entity Integrity Constraint**. We cannot identify a row if its identifier is missing.", companies: ["Oracle"] },
            { question: "Can a Unique Key be NULL?", answer: "Yes. Most SQL standards allow one NULL value in a Unique column (because NULL != NULL). Some (like Postgres) allow multiple NULLs.", companies: ["Microsoft"] },
            { question: "What is a Surrogate Key?", answer: "A key with no business meaning (usually an auto-incrementing integer) used solely to identify the record.", companies: ["Salesforce"] },
            { question: "Difference between Candidate Key and Primary Key?", answer: "A Candidate Key is any minimal super key. The Primary Key is the one specific candidate key chosen by the designer to identify rows.", companies: ["TCS"] },
            { question: "Unique: Can a Primary Key change?", answer: "Technically yes, but it's a **Disaster**. If you change a PK, you must update every single Foreign Key reference in the entire database. This is why Surrogate Keys (immutable IDs) are preferred over Natural Keys (Email).", companies: ["System Design"] }
        ]
    },
    '2.2-integrity': {
        title: 'Integrity Constraints',

        oneLinerAnswer: "Entity Integrity (PK not null), Referential Integrity (FK valid), Domain Integrity (Type check).",
        why: "Garbage In, Garbage Out. The DB must enforce rules so apps don't corrupt data.",
        tradeoffs: [
            "Safety vs Speed: Checking FK constraints on every insert is slow.",
            "Flexibility: Hard to delete data because of dependency chains."
        ],
        failureCases: [
            "Constraint Violation: Inserting Age = 'Twenty' (Domain Error).",
            "Dangling Reference: FK points to non-existent ID."
        ],
        realWorldUsage: "NOT NULL, CHECK (Age > 18), UNIQUE.",

        content: `### The Rules of the Gameta Consistency
Constraints are rules enforced by the DBMS to prevent valid data from becoming corrupt data.

1.  **Domain Constraint**
    *   Data must be of the correct type and range.
    *   *Ex*: \`Age\` must be Integer. \`Gender\` must be 'M' or 'F'.

2.  **Entity Integrity Constraint**
    *   Rule: The Primary Key cannot be NULL.
    *   *Reasoning*: If the PK is NULL, we cannot uniquely identify the record.

3.  **Referential Integrity Constraint**
    *   Rule: A Foreign Key value must either:
        1.  Match an existing Primary Key value in the parent table.
        2.  Be NULL.
    *   *Reasoning*: You cannot have an Order placed by a "Non-existent Customer".

4.  **Key Constraint**
    *   Rule: Values in Primary/Unique keys must be distinct.`,
        code: {
            sql: `ALTER TABLE Student 
ADD CONSTRAINT CheckAge CHECK (Age >= 18);  -- Domain

-- Referential Integrity Actions
ON DELETE CASCADE; -- Delete Parent -> Delete Child
ON DELETE SET NULL; -- Delete Parent -> Child FK becomes NULL`
        },
        interviewQuestions: [
            { question: "What happens on Cascade Delete?", answer: "If you delete a Parent record (e.g., Customer), all related Child records (Orders) are automatically deleted by the system. This is dangerous but prevents 'Orphan' records.", companies: ["Uber"] }
        ]
    },

    // 2.3 SQL
    '2.3-ddl': {
        title: 'DDL (Create, Alter, Drop)',
        visualizerType: 'sql-ddl',

        oneLinerAnswer: "Data Definition Language defines the structure (Schema). CREATE, ALTER, DROP, TRUNCATE.",
        why: "To build the container before we pour water (data) in it.",
        tradeoffs: [
            "Truncate vs Delete: Truncate is fast (DDL, metadata change). Delete is slow (DML, row by row logging).",
            "Drop: Permanent. No rollback (usually)."
        ],
        failureCases: [
            "Migration Fail: ALTER TABLE on a 1TB table locks it for hours.",
            "Dependency: Dropping a table used by a View."
        ],
        realWorldUsage: "Schema Migration Scripts (Flyway/Liquibase).",

        content: `### Defining the Structure
DDL commands are used to define the database structure or schema. They affect the **metadata** of the database, not the data itself.

#### Key Commands
1.  **CREATE**: Builds a new object (Table, View, Index) from scratch.
    *   \`CREATE TABLE users (...);\`
2.  **ALTER**: Modifies the structure of an existing object.
    *   \`ALTER TABLE users ADD age int;\`
3.  **DROP**: Deletes the object *and* its structure entirely. Irreversible.
    *   \`DROP TABLE users;\`
4.  **TRUNCATE**: Removes all rows from a table but *keeps* the structure (columns/constraints) intact.

#### TRUNCATE vs DELETE
| Feature | DELETE | TRUNCATE |
| :--- | :--- | :--- |
| **Type** | DML (Data Manipulation). | DDL (Data Definition). |
| **Logic** | Removes rows one by one. Checks constraints per row. | Deallocates value data pages. Re-initializes table. |
| **Speed** | Slow (Logs every deleted row). | Very Fast (Minimal logging). |
| **Where Clause** | Allowed (\`WHERE id = 5\`). | Not Allowed (All or Nothing). |
| **Rollback** | Possible (if transaction active). | Impossible (Implicit Commit). |`,
        code: {
            sql: `-- Create
CREATE TABLE Students (
    ID int PRIMARY KEY,
    Name varchar(50)
);

-- Alter
ALTER TABLE Students ADD Email varchar(100);

-- Truncate
TRUNCATE TABLE Students; -- Fast wipe, structure remains.`
        },
        interviewQuestions: [
            { question: "Can you rollback TRUNCATE?", answer: "In standard SQL, TRUNCATE is a DDL operation and incurs an implicit commit, so it cannot be rolled back. However, in some DBs like Postgres or SQL Server (within a transaction block), it theoretically can, but generally, treat it as irreversible.", companies: ["TCS", "Accenture"] }
        ]
    },
    '2.3-dml': {
        title: 'DML (Insert, Update, Delete)',

        oneLinerAnswer: "Data Manipulation Language manages data. INSERT, UPDATE, DELETE, SELECT (strictly DQL, but grouped here).",
        why: "To use the app. Every Signup is an INSERT. Every Login is a SELECT.",
        tradeoffs: [
            "Bulk Insert vs Single Insert: 1000 single inserts are slow (1000 transactions). Bulk is fast.",
            "Update without Where: Updates EVERY ROW (Disaster)."
        ],
        failureCases: [
            "SQL Injection: `SELECT * FROM Users WHERE name = '' OR '1'='1'`.",
            "Deadlock: Two updates waiting on each other."
        ],
        realWorldUsage: "Every interaction with data.",

        content: `### Manipulating the Data (DML) commands are used for managing data within schema objects.

#### Key Commands
1.  **INSERT**: Adds new records (tuples) to a table.
    *   *Tip*: Always specify column names: \`INSERT INTO users (name, age) ...\`
2.  **UPDATE**: Modifies existing records.
    *   *Warning*: **ALWAYS** use a \`WHERE\` clause, or you will update every row in the table!
3.  **DELETE**: Removes specific records.
    *   *Warning*: Like UPDATE, if you omit \`WHERE\`, the table becomes empty.

#### DQL (Data Query Language)
*   **SELECT**: Strictly speaking, SELECT is DQL, but often grouped with DML. It retrieves data without modifying it.`,
        code: {
            sql: `-- Insert
INSERT INTO Students (ID, Name) VALUES (1, 'Ruthvik');

-- Update (Safe Mode)
UPDATE Students 
SET Name = 'Ruthvik B' 
WHERE ID = 1; -- Without WHERE, all students become 'Ruthvik B'

-- Delete
DELETE FROM Students WHERE ID = 1;`
        }
    },
    '2.3-dcl-tcl': {
        title: 'DCL (Grant) & TCL (Commit)',

        oneLinerAnswer: "DCL controls access (GRANT/REVOKE). TCL manages transactions (COMMIT/ROLLBACK/SAVEPOINT).",
        why: "Security (Who can read?) and Atomicity (Save or Undo).",
        tradeoffs: [
            "Granting 'ALL' vs Least Privilege: Easy dev setup vs Security Risk.",
            "Auto-Commit: Convenient but dangerous for multi-step logic."
        ],
        failureCases: [
            "Accidental Revoke: Locking yourself out of the DB.",
            "Phantom Commit: Thinking data is safe but power fails before Commit."
        ],
        realWorldUsage: "AWS IAM Roles (Cloud DCL), Banking Transfer (TCL).",

        content: `### Controlling Access & Transactions
Used to control access and permissions.
*   **GRANT**: Gives user permissions.
    *   \`GRANT SELECT ON Employees TO 'intern_role';\`
*   **REVOKE**: Withdraws permissions.
    *   \`REVOKE UPDATE ON Employees FROM 'intern_role';\`

### TCL (Transaction Control Language)
Used to manage the timeline of DML statements to ensure logical units of work.
*   **COMMIT**: Saves all changes made since the last commit permanently to the disk.
*   **ROLLBACK**: Undoes all changes made since the last starting point (Undo button).
*   **SAVEPOINT**: Sets a specific checkpoint to rollback to, instead of rolling back the entire transaction.`,
        code: {
            sql: `BEGIN TRANSACTION;
INSERT INTO Order (ID, Item) VALUES (101, 'Book');
SAVEPOINT Sp1;
INSERT INTO Order (ID, Item) VALUES (102, 'Bike'); -- Mistake?
ROLLBACK TO Sp1; -- Line 3 undone, Line 2 remains.
COMMIT;`
        }
    },
    '2.3-joins': {
        title: 'Joins (Inner, Outer, Cross)',
        visualizerType: 'sql-joins',

        oneLinerAnswer: "Combines rows from two tables based on a related column. Inner (Match), Left (Match + Left All), Full (All).",
        why: "Normalization splits data. Joins bring it back together.",
        tradeoffs: [
            "Inner vs Outer: Inner is faster (less data). Outer ensures no data loss (NULLs).",
            "Cross Join: Cartesian product (Row count A * B). Dangerous performance killer."
        ],
        failureCases: [
            "N+1 Problem: Doing a Join in application code loop instead of SQL.",
            "Missing Index: Joining on non-indexed column = Full Table Scan."
        ],
        realWorldUsage: "Fetching User + Order History.",

        content: `### Unifying Datables
Joins allow us to combine rows from two or more tables based on a related column between them.

#### The Types of Joins
1.  **INNER JOIN** (Intersection):
    *   Returns records that have matching values in *both* tables.
    *   *Venn Diagram*: The overlapping center part only.

2.  **LEFT JOIN** (Left Outer Join):
    *   Returns all records from the **Left** table, and the matched records from the Right table.
    *   *Result*: If no match found in Right, the result is NULL.

3.  **RIGHT JOIN** (Right Outer Join):
    *   Returns all records from the **Right** table, and the matched records from the Left.

4.  **FULL JOIN** (Full Outer Join):
    *   Returns all records when there is a match in *either* left or right table.
    *   *Result*: Tons of NULLs if data isn't tightly linked.

5.  **CROSS JOIN** (Cartesian Product):
    *   Returns all possible combinations of rows.
    *   *Size*: RowCount(A) * RowCount(B). (Dangerous for large tables).

6.  **SELF JOIN**:
    *   A regular join, but the table is joined with itself.
    *   *Use Case*: Finding "which Employee is the Manager of John" (when both are in the Employee table).`,
        code: {
            sql: `-- Inner Join (Most Common)
SELECT Emp.Name, Dept.Name 
FROM Emp 
INNER JOIN Dept ON Emp.DeptID = Dept.ID;

-- Left Join (Find Emps without Dept)
SELECT Emp.Name 
FROM Emp 
LEFT JOIN Dept ON Emp.DeptID = Dept.ID
WHERE Dept.ID IS NULL; -- Filters for non-matches`
        },
        interviewQuestions: [
            { question: "Performance: Inner vs Outer Join?", answer: "Inner Joins are usually faster because the database engine can filter out non-matching rows early. Outer joins force the DB to read and preserve at least one full table.", companies: ["Meta"] },
            { question: "What is a Natural Join?", answer: "A join that automatically links tables based on columns with the **same name** and data type. It's risky because if you add a common column name later, your query breaks. Avoid using it in production.", companies: ["Google"] },
            { question: "Can we join a table with itself?", answer: "Yes, this is a Self Join. It is useful for hierarchical data like 'Employees and Managers'.", companies: ["Amazon"] },
            { question: "What is a Cartesian Product?", answer: "The result of a CROSS JOIN where every row in Table A is paired with every row in Table B. If Table A has 10 rows and B has 10, result is 100.", companies: ["Microsoft"] },
            { question: "Unique: When is a Cross Join actually useful?", answer: "Generating test data or 'Grid' reports. Example: Table 'Sizes' (S, M, L) and Table 'Colors' (Red, Blue). Cross join gives every combination to Populate inventory stock.", companies: ["Data Warehousing"] }
        ]
    },
    '2.3-advanced': {
        title: 'Advanced (Group By, Views)',

        oneLinerAnswer: "Group By aggregates data (SUM, COUNT). Views are virtual tables (Saved Queries).",
        why: "Reporting. 'Total Sales per Month'. Views simplify complex joins for analysts.",
        tradeoffs: [
            "Materialized View vs Standard View: Materialized is fast (cached) but stale. Standard is fresh but slow.",
            "Having vs Where: Where filters rows. Having filters groups."
        ],
        failureCases: [
            "Slow View: A View built on 10 nested views is impossible to debug/optimize.",
            "Group By without Index: Sorting massive data in memory."
        ],
        realWorldUsage: "Analytics Dashboards.",

        content: `### Aggregation & Viewscution
Knowing the order in which SQL executes is the #1 Interview Question. It is **NOT** the order you write it.

**Written Order**:
\`SELECT\` -> \`FROM\` -> \`WHERE\` -> \`GROUP BY\` -> \`HAVING\` -> \`ORDER BY\`

**Logical Execution Order**:
1.  **FROM / JOIN**: Pick the tables (The Data Source).
2.  **WHERE**: Filter the rows (The Filter).
3.  **GROUP BY**: Aggregate the rows (The Buckets).
4.  **HAVING**: Filter the groups (The Bucket Filter).
5.  **SELECT**: Pick the columns (The Output).
6.  **ORDER BY**: Sort the final result (The Presentation).
7.  **LIMIT**: Cut it short.

### 2. Grouping & Aggregating
*   **GROUP BY**: Collapses multiple rows into a single summary row.
*   **HAVING**: Often confused with WHERE.
    *   \`WHERE\` filters rows *before* grouping.
    *   \`HAVING\` filters groups *after* grouping.

### 3. Indexing
*   **Clustered Index**: Reorders the actual data on the disk. (Like a Phonebook). Only **1** per table (usually PK).
*   **Non-Clustered Index**: Creates a separate lookup structure pointing to the data. (Like an Index at the back of a Textbook). Multiple allowed.`,
        code: {
            sql: `-- Find Departments with > 10 employees
SELECT DeptID, COUNT(*) 
FROM Emp 
-- WHERE Salary > 50000 (Optional: Early filter)
GROUP BY DeptID 
HAVING COUNT(*) > 10; -- Filter the count`
        },
        interviewQuestions: [
            { question: "Difference between WHERE and HAVING?", answer: "WHERE filters specific rows BEFORE grouping. HAVING filters summary groups AFTER grouping. You cannot use aggregate functions (SUM, AVG) in WHERE.", companies: ["Amazon", "Flipkart"] },
            { question: "What is the N+1 Problem?", answer: "When code fetches a parent record, then issues N separate queries for children. Fix: JOIN fetch or Batch loading.", companies: ["Hibernate", "Spring"] },
            { question: "Index Clustered vs Non-Clustered?", answer: "Clustered: Sorts data on disk (only 1 per table). Non-Clustered: Separate structure pointing to data (many allowed).", companies: ["Accenture"] },
            { question: "Unique: Why is COUNT(*) faster than COUNT(id)?", answer: "It isn't necessarily, but: COUNT(*) counts rows. COUNT(col) counts non-null values (Checking NULL adds overhead). Modern optimizers make them equal, but logically COUNT(*) is 'purer'.", companies: ["PostgreSQL Team"] }
        ]
    },

    // 2.4 Design
    '2.4-anomalies': {
        title: 'Anomalies',

        oneLinerAnswer: "Bugs in DB design causing inconsistency. Update Anomaly (Edit once, miss copy), Delete Anomaly (Lose unrelated data), Insert Anomaly (Cant add data).",
        why: "To avoid data corruption. If I change a student's address, I shouldn't have to update 50 rows.",
        tradeoffs: [
            "Redundancy vs Anomalies: More redundancy = More anomalies.",
            "De-normalization: Sometimes we ACCEPT anomalies to get faster reads (Data Warehouses)."
        ],
        failureCases: [
            "Lost Data: Deleting the last 'Math' student also deletes the 'Math' course definition.",
            "Inconsistent Data: Two rows show different addresses for same user."
        ],
        realWorldUsage: "Excel sheets are full of anomalies.",

        content: `### The Price of Bad Design Costs
Anomalies are inconveniences or errors that occur when a database is not properly designed (i.e., not normalized).

1.  **Insertion Anomaly**
    *   **Problem**: We cannot add specific data because it depends on missing other data.
    *   *Example*: We want to add a new "Course" (CS101), but our table uses (StudentID, CourseID) as the PK. We cannot add the course until at least one student enrolls in it.
2.  **Deletion Anomaly**
    *   **Problem**: Deleting one piece of data unknowingly deletes another unrelated piece of data.
    *   *Example*: If "John" is the only student in "CS101", deleting "John" also deletes all information about "CS101" from the database.
3.  **Update Anomaly**
    *   **Problem**: Redundant data means we must update multiple rows.
    *   *Example*: "Professor Smith" moves to a new office. If his office address is stored in 100 student records, we must update all 100. If we miss one, the data becomes inconsistent.`
    },
    '2.4-normalization': {
        title: 'Normalization (1NF - BCNF)',
        visualizerType: 'normalization',

        oneLinerAnswer: "Process of structuring data to minimize redundancy. 1NF (Atomic), 2NF (No Partial Dep), 3NF (No Transitive Dep), BCNF (Strict 3NF).",
        why: "To maintain data integrity and save space.",
        tradeoffs: [
            "Write Speed vs Read Speed: Normalized is fast for Writes (Update 1 row), slow for Reads (Many Joins).",
            "Complexity: 5 tables are harder to query than 1 giant table."
        ],
        failureCases: [
            "Join Explosion: Over-normalizing to 6NF requires 10 joins for usage, crashing CPU.",
            "Data Duplication: Under-normalized db grows 10x in size."
        ],
        realWorldUsage: "OLTP Systems (Banking) are 3NF. OLAP (Analytics) are Star Schema (De-normalized).",

        content: `### Cleaning Up the MessEfficiently
Normalization is the process of decomposing tables to minimize redundancy and dependency.

#### 1. First Normal Form (1NF)
*   **Rule**: Atomic Values. No repeating groups or arrays.
*   *Violation*: \`{Student: "Ruthvik", Courses: ["CS101", "CS102"]}\`
*   *Fix*: Flatten it into two rows: \`("Ruthvik", "CS101"), ("Ruthvik", "CS102")\`.

#### 2. Second Normal Form (2NF)
*   **Rule**: 1NF + **No Partial Dependency**.
*   *Definition*: All non-key attributes must depend on the **entire** Primary Key, not just part of it.
*   *Violation*: Table(StudentID, CourseID, ProfessorName). PK=(StudentID, CourseID). 
    *   \`ProfessorName\` depends only on \`CourseID\`, not \`StudentID\`.
*   *Fix*: Split into two tables: \`Enrolls(StudentID, CourseID)\` and \`Course(CourseID, ProfessorName)\`.

#### 3. Third Normal Form (3NF)
*   **Rule**: 2NF + **No Transitive Dependency**.
*   *Definition*: Non-key attributes must not depend on other non-key attributes. (A -> B -> C).
*   *Violation*: Table(StudentID, ZipCode, City). 
    *   \`City\` depends on \`ZipCode\`. \`ZipCode\` depends on \`StudentID\`. 
    *   If ZipCode changes, City changes.
*   *Fix*: Split into \`Student(ID, ZipCode)\` and \`Location(ZipCode, City)\`.

#### 4. Boyce-Codd Normal Form (BCNF)
*   **Rule**: 3NF + **Every Determinant is a Candidate Key**.
*   *Definition*: If \`X -> Y\`, then \`X\` must be a Super Key.
*   *Context*: Stronger than 3NF. Handles rare cases with overlapping multi-attribute keys.`,
        code: {
            text: `Evolution Summary:
Un-normalized: [Student, Course, Instructor, Instructor_Phone]
1NF: Separation of atomic values.
2NF: Split tables to remove Partial Dependencies.
3NF: Split tables to remove Transitive Dependencies.
BCNF: Strict Key adherence.`
        },
        interviewQuestions: [
            { question: "Why not normalize to 5NF?", answer: "Performance. Highly normalized data (4NF, 5NF) requires too many JOINs to reconstruct readable information. 3NF/BCNF is the industry standard trade-off between speed and redundancy.", companies: ["Google", "Uber"] },
            { question: "What is Denormalization?", answer: "The process of intentionally adding redundancy (e.g., storing 'Total' in a parent table) to optimize read performance.", companies: ["Twitter"] },
            { question: "Can a table be in 3NF but not BCNF?", answer: "Yes, if a non-trivial dependency X -> Y exists where X is not a super key. This happens with multiple overlapping candidate keys.", companies: ["Oracle"] }
        ]
    },

    // 2.5 Transactions
    '2.5-acid': {
        title: 'ACID Properties',
        visualizerType: 'acid-properties',

        oneLinerAnswer: "Atomicity (All/None), Consistency (Rules valid), Isolation (Concurrent safety), Durability (Saved forever).",
        why: "Financial transactions. If I transfer $100, money must leave my account AND enter yours. No half-states.",
        tradeoffs: [
            "Performance vs Safety: Enforcing ACID (locking, logging) imposes massive overhead (~50%).",
            "BASE: NoSQL drops ACID for availability."
        ],
        failureCases: [
            "Partial Failure: Money leaves me, server crashes, you don't get it (Atomicity fail).",
            "Data Loss: Server restart wipes committed data (Durability fail)."
        ],
        realWorldUsage: "Bank Transfers, E-commerce Checkout.",

        content: `### The Holy Grail of Reliability
To ensure data integrity, a transaction(a single logical unit of work) must guarantee these 4 properties:

#### 1. Atomicity("All or Nothing")
            *   ** Concept **: A transaction is an indivisible unit.Either all its operations happen, or none do.
*   ** Failure **: If power fails after debiting Account A but before crediting Account B, the DB must ** rollback ** the debit.
*   ** Mechanism **: ** Transaction Log** (Undo / Redo logs).

#### 2. Consistency(Valid State)
    *   ** Concept **: The DB must move from one valid state to another.All constraints(FK, Unique, Checks) must be satisfied.
*   ** Example **: After a transfer, \`Sum(Accounts)\` must remain invariant.

#### 3. Isolation (Independence)
*   **Concept**: Multiple transactions executing concurrently should not interfere with each other. Use "Serializable" levels.
*   **Mechanism**: **Locks** and **Concurrency Control**.

#### 4. Durability (Permanence)
*   **Concept**: Once a transaction is Committed, the changes are permanent, even in the event of a system crash, power loss, or fire.
*   **Mechanism**: **Write-Ahead Logging (WAL)**. The DB writes the "intent" to disk log before modifying the actual data page.`,
        code: {
            sql: `BEGIN TRANSACTION;
UPDATE Acct SET Bal = Bal - 100 WHERE ID = 1;
-- System Crash Here!
UPDATE Acct SET Bal = Bal + 100 WHERE ID = 2;
COMMIT;
-- On Restart: DB sees uncommitted Tx in Log -> UNDO Line 2.`
        },
        interviewQuestions: [
            { question: "How does the DB implement Atomicity?", answer: "Using a **Write-Ahead Log (WAL)**. Before modifying the actual data page, the DB writes the change to a log file. If a crash occurs, the recovery process reads the log to UNDO incomplete transactions.", companies: ["Visa", "Mastercard"] },
            { question: "Dirty Read vs Phantom Read?", answer: "Dirty: Reading uncommitted data. Phantom: A range query returns new rows appearing in a subsequent read (due to another transaction inserting).", companies: ["Oracle", "Salesforce"] },
            { question: "What is Two-Phase Locking (2PL)?", answer: "A protocol that ensures serializability. Phase 1: Growing (Acquire locks). Phase 2: Shrinking (Release locks). Once you release a lock, you cannot acquire a new one.", companies: ["IBM"] },
            { question: "What is optimistic concurrency control?", answer: "A method where we assume no conflicts will occur. We verify this at the end (Validation Phase) before committing. Good for read-heavy systems.", companies: ["Redis"] },
            { question: "Unique: Can we satisfy ACID without a Disk?", answer: "Yes! Redis (AOF=Off) is In-Memory. Atomicity/Isolation/Consistency exist in RAM. Durability is sacrificed. But full ACID usually implies Durable Storage.", companies: ["Redis"] }
        ]
    },
    '2.5-schedules': {
        title: 'Schedules & Serializability',

        oneLinerAnswer: "A Schedule is a sequence of ops. Serializable = Equivalent to running transactions one by one (Safe).",
        why: "We want to run transactions in parallel (Speed) but get the same result as if we ran them sequentially (Correctness).",
        tradeoffs: [
            "Throughput vs Correctness: Serial is safe but slow (1 core). Interleaved is fast but risky.",
            "Conflict Serializability: The math we use to prove a schedule is safe."
        ],
        failureCases: [
            "Dirty Read: Reading uncommitted data that gets rolled back.",
            "Lost Update: Overwriting someone else's work."
        ],
        realWorldUsage: "DB Engines verify this automatically.",

        content: `### Ordering Chaos
A **Schedule** is the order of execution of operations from multiple transactions (T1, T2...).

#### 1. Serial Schedule
*   **Description**: T1 executes appropriately. Then T2 starts. (No multitasking).
*   **Verdict**: Safe but **Slow**. Low CPU utilization.

#### 2. Concurrent Schedule
*   **Description**: The OS/DBMS interleaves instructions from T1 and T2 (Time-slicing).
*   **Verdict**: Fast (High Throughput) but **Risky** (Race Conditions).

#### 3. Serializable Schedule
*   **The Gold Standard**.
*   A concurrent schedule that is mathematically proven to be equivalent to *some* serial schedule.
*   It gives us the **Speed** of concurrency with the **Safety** of serial execution.

#### Conflict Serializability
*   We check for "Conflicts" (Read-Write, Write-Read, Write-Write on the same item).
*   If we can swap non-conflicting instructions to transform the schedule into a Serial one, it is Serializable.`
    },
    '2.5-concurrency': {
        title: 'Concurrency Control',
        content: `### Keeping it Safe
Mechanisms to ensure isolation and prevent conflicts.

#### 1. Lock-Based Protocols
*   **Shared Lock (S)**: Read permission. "I am reading, please don't change it, but others can read."
*   **Exclusive Lock (X)**: Write permission. "I am changing it, nobody else can touch it."

#### 2. Two-Phase Locking (2PL)
*   The protocol that guarantees Serializability.
*   **Phase 1 (Growing)**: Transaction may obtain locks, but cannot release any.
*   **Phase 2 (Shrinking)**: Transaction releases locks, but cannot obtain any new ones.
*   **Downside**: Strict locking can lead to **Deadlocks**.

#### 3. Timestamp Ordering
*   **Optimistic approach**. No locks.
*   Each transaction gets a timestamp (TS).
*   Rule: If an older Tx (Lower TS) tries to write *after* a younger Tx (Higher TS) has read/written, the older Tx is **aborted** and restarted.`,
        interviewQuestions: [
            { question: "What is a Deadlock in DBMS?", answer: "A situation where T1 waits for a lock held by T2, and T2 waits for a lock held by T1. Neither can proceed. Detected via 'Wait-For Graph' (Cycle detection). Solved by killing the 'victim' transaction.", companies: ["Amazon", "Oracle"] }
        ]
    },

    // 2.6 NoSQL
    '2.6-types': {
        title: 'NoSQL Types (Key-Value, Doc, Graph)',
        content: `### "Not Only SQL"
Designed for distributed, high-scale systems where RDBMS (which scales vertically) becomes too expensive or slow.

| Type | Description | Use Case | Examples |
| :--- | :--- | :--- | :--- |
| **Key-Value** | A simple Hash Map. Ultra-fast lookups. O(1). | Caching, Session Management. | Redis, DynamoDB, Memcached. |
| **Document** | Stores data as JSON/BSON documents. Flexible schema. | Content Management, Catalogs, Startups. | MongoDB, CouchDB. |
| **Column-Family** | Stores columns together. Efficient for writing massive logs. | Time-series data, IoT, Chat Logs. | Cassandra, HBase. |
| **Graph** | Nodes (Entities) and Edges (Relationships). | Social Networks, Recommendation Engines. | Neo4j, InfiniteGraph. |`
    },
    '2.6-cap': {
        title: 'CAP Theorem & BASE',
        content: `### The CAP Theorem
In any Distributed Data Store, you can only guarantee **2 out of 3** properties simultaneously:

1.  **Consistency (C)**: Every read receives the most recent write (or an error). "All nodes see the same data at the same time."
2.  **Availability (A)**: Every request receives a response (no error), but no guarantee it is the latest data.
3.  **Partition Tolerance (P)**: The system continues to operate despite network failures (dropped messages) between nodes.

#### The Trade-off
Since Network Partitions (P) are inevitable in the real world (cables get cut), you MUST choose P. The real choice is **CP vs AP**.
*   **CP (Consistency + Partition Tolerance)**: If a partition occurs, the system stops accepting writes to preserve data correctness. (e.g., MongoDB, HBase).
*   **AP (Availability + Partition Tolerance)**: If a partition occurs, the system accepts writes, but nodes might be out of sync. (e.g., Cassandra, Dynamo).

### BASE Properties (NoSQL Philosophy)
RDBMS uses ACID. NoSQL uses BASE:
1.  **Basically Available**: The system works most of the time.
2.  **Soft state**: The state of the system may change over time, even without input (due to replication).
3.  **Eventual consistency**: If input stops, all nodes will eventually become consistent.`,
        interviewQuestions: [
            { question: "Can a system be CA?", answer: "Practically, NO. A system that is CA implies it cannot handle network failures (Partition Tolerance). If the network breaks, a CA system must either stop (Sacrifice A) or desync (Sacrifice C). You cannot ignore P in a distributed world.", companies: ["Google", "Facebook"] },
            { question: "BASE vs ACID?", answer: "ACID = Pessimistic, strong consistency. BASE = Optimistic, eventual consistency. BASE allows the system to be 'soft' (changing) to maintain high availability.", companies: ["Cassandra"] },
            { question: "Unique: Why does 'Eventual Consistency' sound scary?", answer: "It sounds unpredictable, but in reality, 'eventually' is usually milliseconds. The real risk is read-after-write consistency in user flows (posting a tweet and not seeing it immediately).", companies: ["Twitter"] }
        ]
    },

    // --- 2.7 Advanced SQL ---
    '2.7-window': {
        title: 'Window Functions (RANK, LEAD)',
        content: `### The "Look Around" Power
Standard \`GROUP BY\` collapses rows. Window functions allow you to calculate aggregates **without** collapsing the result set. You can look at "peer" rows while keeping the current row intact.

#### Syntax
\`Function() OVER (PARTITION BY ... ORDER BY ...)\`

#### Key Functions
1.  **Ranking**:
    * \`ROW_NUMBER()\`: Unique count (1, 2, 3, 4).
    * \`RANK()\`: Skips on ties (1, 2, 2, 4).
    * \`DENSE_RANK()\`: No skipping (1, 2, 2, 3).
2.  **Value Extraction**:
    * \`LEAD(col, 1)\`: Peek at the *next* row's value.
    * \`LAG(col, 1)\`: Peek at the *previous* row's value.
    * *Use Case*: Calculating Year-over-Year growth.`,
        code: {
            sql: `-- Find top 3 salaries per Department
SELECT * FROM (
    SELECT Name, Dept, Salary,
           DENSE_RANK() OVER (PARTITION BY Dept ORDER BY Salary DESC) as Rank
    FROM Employees
) WHERE Rank <= 3;`
        },
        interviewQuestions: [
            { question: "Difference between RANK and DENSE_RANK?", answer: "RANK leaves gaps after ties (1, 1, 3). DENSE_RANK does not (1, 1, 2). Use DENSE_RANK if you need a continuous sequence.", companies: ["Amazon", "Netflix"] },
            { question: "Unique: Can Window Functions replace GROUP BY?", answer: "No. GROUP BY reduces rows (100 rows -> 5 groups). Window Functions retain rows (100 rows -> 100 rows with an extra column). They solve different problems.", companies: ["Data Science"] }
        ]
    },
    '2.7-cte': {
        title: 'CTEs & Recursive Queries',
        content: `### Readable Complexity
A CTE is a temporary result set that exists only for the duration of a single query. It is a "Named Subquery" that makes code cleaner.

#### Recursive CTEs
The killer feature. Allows SQL to traverse hierarchical data (Trees/Graphs) like "Org Charts" or "Folder Structures".
1.  **Anchor Member**: Select the root nodes.
2.  **Recursive Member**: Select children by joining back to the CTE name.
3.  **Union All**: Combine them.`,
        code: {
            sql: `-- Standard CTE
WITH Sales_CTE AS (
    SELECT DeptID, SUM(Amount) as Total FROM Sales GROUP BY DeptID
)
SELECT * FROM Sales_CTE WHERE Total > 10000;`
        }
    },

    // --- 2.8 Internals ---
    '2.8-btrees': {
        title: 'B-Trees vs LSM Trees',
        visualizerType: 'btree-diagram',
        content: `### How Databases actually write to disk
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
            { question: "Why does SQL use B+ Trees instead of Hash Maps?", answer: "Hash Maps are O(1) for exact lookups (WHERE id = 5), but useless for Range Queries (WHERE age > 18). B+ Trees handle ranges efficiently via linked leaf nodes.", companies: ["Google", "Meta"] },
            { question: "Unique: What happens to a B-Tree if I insert sorted data?", answer: "It can actually be BAD for standard BSTs (unbalanced), but B-Trees self-balance. However, inserting sequentially implies dealing with the 'Rightmost' leaf page continuously, potentially causing locking contention on that single page (Hot Page problem).", companies: ["High Performance DB"] }
        ]
    },
    '2.8-scaling': {
        title: 'Sharding & Replication',
        content: `### Scaling Out (Horizontal)
When a single server cannot hold all data.

#### 1. Replication (Read Scaling)
* **Leader-Follower**: All Writes go to **Leader**. Leader streams logs to **Followers**. Reads can go to Followers.
* **Problem**: Replication Lag. You might write to Leader, then immediately read from Follower and not see your data (Eventual Consistency).

#### 2. Sharding (Write Scaling)
* **Logic**: Split the data across multiple servers based on a "Shard Key".
* *Ex*: Users A-M go to DB1, N-Z go to DB2.
* **Problem**: Cross-shard transactions are complex and slow.`,
        interviewQuestions: [
            { question: "How do you choose a Shard Key?", answer: "Choose a key with high cardinality and even distribution (like UUID). Avoid keys that cause 'Hotspots' (like Date, where everyone writes to the 'Today' shard at once).", companies: ["Uber", "Twitter"] },
            { question: "Vertical vs Horizontal Scaling?", answer: "Vertical: Bigger CPU/RAM (Costly, finite limit). Horizontal: More machines (Cheaper, infinite scale, complex software).", companies: ["AWS"] },
            { question: "Unique: What is the 'Thundering Herd' problem?", answer: "When 1000 processes wake up simultaneously to handle 1 event (like a cache expiry). They all hammer the database at once. Solution: Exponential Backoff or Staggered expiry.", companies: ["Facebook"] }
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
            // Fallback content
            if (!details.content) {
                details.content = "Detailed content coming soon (Regenerating)...";
                details.titles = item.title;
            }
            flat.push({ ...item, ...details });
        }
    });
    return flat;
};

const dbmsData = {
    id: 'dbms',
    hierarchy: hierarchy,
    topics: flatten(hierarchy)
};

export default dbmsData;
