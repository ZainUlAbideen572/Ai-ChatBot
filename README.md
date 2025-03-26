--
# React Project with Node.js

This project is built using React for the frontend and Node.js for the backend.
## 📌 Prerequisites

Ensure you have the following installed:

- **Node.js** (v21.7 or later)
- **Git** (for cloning the repository)

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies


Or, if using `npm`:

```sh
npm install
```

### 3️⃣ Run the Development Server

For the frontend (React):

```sh
npm start
```

For the backend (Node.js), navigate to the backend folder:

```sh
cd server
node server/index.js  
```

### 4️⃣ Build the Project

If you want to create a production build:

```sh
npm run build

--



## 🚀 Features Implemented
### 3 Core Features Completed**
1. AI Chat Interface:
   - Users can send messages and receive AI-generated responses (mocked via an API).
  
2. **Feedback System:**
   - Thumbs Up/Down for AI responses
   - Conversation Rating at the end of the conversation.
   - Users can provide written feedback after the conversation.

3. **Conversation Management (Redux for State Management):**
   - Users can have multiple conversations.
   - Conversations are stored in Redux.
   - Past conversations are accessible from a sidebar.

4. **Sharing Conversations:**
   - A conversation can be shared via a unique link.
  
5. **Feedback Overview Page:**
   - Users can view all feedback across conversations.

---

Improvements 
 -- Tailwind css Styles are not applying need to verify it properly.
 -- Needs to Improve chat interface responsiveness (optimize for different screen sizes).



 *Trade-offs Made**
- **Skipped authentication** (assumed a non-authenticated user experience).
- **Conversations are not stored in a database** (can be implemented later).

---
