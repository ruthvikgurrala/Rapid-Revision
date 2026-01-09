# 🚀 Rapid Revision

**The Ultimate FAANG-Ready CS Core Subjects Revision Platform.**

Rapid Revision is a modern, high-performance web application designed to help software engineers master Computer Science core subjects (OS, CN, DBMS, OOPS, System Design) for technical interviews.

> **"Don't just memorize. Understand engineering trade-offs."**

---

## 🔥 Features

### 1. FAANG-Ready Content Schema
Every topic is structured to answer the questions that actually matter in interviews:
- **TL;DR**: A 30-second summary for rapid recall.
- **Why it exists**: The engineering problem this concept solves.
- **Tradeoffs**: Real-world pros/cons (e.g., *SQL vs NoSQL*, *TCP vs UDP*).
- **Failure Cases**: How things break in production (e.g., *Race Conditions*, *Split Brain*).
- **Real World Usage**: Where you see this in daily dev life (e.g., *Kafka used System Calls*).
- **Interview Questions**: Curated questions from Google, Amazon, Netflix, etc.

### 2. Interactive Visualizers
- **Memory Layout**: Stack vs Heap visualizer.
- **Networking**: TCP Handshake animations.
- **System Design**: CAP Theorem interactives.

### 3. "Hacks" Strategy Page
- **The Loop**: A scientific spacing repetition strategy for retention.
- **System Design Cheatsheets**: Quick reference guides for high-level architecture.

### 4. Progress Tracking (Firebase)
- **Auto-tracking**: Automatic progress save on topic completion.
- **Profile**: View your completion stats and badges.

---

## 🛠 Tech Stack

- **Frontend**: React (Vite), TailwindCSS, Framer Motion
- **Backend/Auth**: Firebase (Auth, Firestore)
- **Deployment**: Vercel (Ready)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Firebase Project Configured

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/ruthvikgurrala/Rapid-Revision.git
    cd Rapid-Revision
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4.  **Run Locally**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

```bash
src/
├── components/     # Reusable UI components (Layout, Visualizers)
├── contexts/       # React Context (AuthContext)
├── data/           # The "Brain" - All CS content (OS, CN, DBMS...)
├── pages/          # Application Routes (Home, Topic, Profile)
└── main.jsx        # Entry point
```

---

## 🤝 Contribution

Contributions are welcome! Please open an issue or submit a PR for any new topics or improvements.

---

Made with ❤️ by Ruthvik Gurrala
