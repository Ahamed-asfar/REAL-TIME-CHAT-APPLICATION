REAL-TIME CHAT APPLICATION

*COMPANY*: CODTEXH IT SOLUTIONS

*NAME*: AHAMED ASFAR

*INTERN ID*: CT04DH245

*DOMAIN*: MERN STACK

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH

📚 Real-Time Chat Application using MERN Stack & Socket.IO
🔧 Tools & Technologies Used:
Node.js (v22.x) — Backend runtime environment

Express.js — Web framework for handling server routes

Socket.IO — Real-time WebSocket communication layer

React.js — Frontend library for building UI

Socket.IO Client — To establish live connection with backend

VS Code — Code editor

Command Prompt (CMD) — Runtime terminal for backend/frontend

React Scripts (CRA) — Create React App boilerplate for frontend setup

CSS — For frontend styling

Git & GitHub — Version control and repository hosting

📜 Project Overview:
This project is a real-time chat application built as part of the MERN Stack internship program assigned by CodTech. The task involved developing a complete chat system that allows multiple users to communicate live via a web interface using real-time socket connections. The application supports instant message broadcasting across multiple clients and updates chats instantly using event-driven architecture.

The main aim was to demonstrate hands-on knowledge of full-stack development concepts, particularly in real-time communication using WebSockets. The project includes both a backend built in Node.js and Express.js with Socket.IO, and a frontend built using React.js and socket.io-client.

⚙️ Functionality Breakdown:
✅ 1. Backend (Node.js + Express + Socket.IO)
The backend server is created using Express.js.

Socket.IO is used to establish bi-directional WebSocket communication.

Whenever a user connects, a unique socket ID is generated and logged.

When a user sends a message, the server listens for the custom event asfarMsgSend and broadcasts it to all connected clients using io.emit().

Disconnections are handled gracefully using the disconnect event.

✅ 2. Frontend (React + socket.io-client)
The frontend is a single-page application created using Create React App.

Users are prompted to enter their name before entering the chat room.

Messages are displayed in a styled chat box that auto-updates in real time.

When a message is typed and sent, it emits the custom event asfarMsgSend to the server.

The component listens for incoming messages via asfarMsgReceive and updates the chat feed using React state.

The UI includes a dynamic heading showing the user's name and a clean chat interface with a message input and submit button.

👨‍🔧 Procedure Followed:
Environment Setup:

Installed Node.js and React.

Created two separate folders: asfar-chat-backend and asfar-chat-client.

Backend Development:

Initialized a Node.js project with npm init -y.

Installed dependencies: express, socket.io, cors.

Created server.js to handle socket connections and message broadcasting.

Server runs on port 4000.

Frontend Development:

Created React app using npx create-react-app.

Installed socket.io-client.

Set up React components to connect to backend.

Used React state and useEffect hook to manage chat messages and lifecycle events.

Testing & Debugging:

Opened the app in two tabs to simulate multiple users.

Ensured messages are transmitted and received across all tabs.

Debugged issues like duplicate message rendering using cleanup logic in useEffect.

Customization:

Customized all code with personal names (e.g., “Asfar”, “Afran”) for ownership.

Added emojis and color scheme to UI.

Inserted personal footer and branding inside the chat window.

Final Touches:

Screenshots of frontend and backend taken during testing.

Code pushed to GitHub with appropriate structure and README file.

Application successfully passed all task criteria and demonstrates real-time functionality.

🏁 Conclusion:
This real-time chat application fulfills the MERN internship Task 1 requirement by demonstrating a full-stack project with live communication. It reflects a clear understanding of how to set up client-server communication using Socket.IO and showcases proficiency in React and Node.js.

All functionalities were built from scratch, customized to include personal identifiers, and tested rigorously to ensure proper delivery. The project proves my capability to design, develop, debug, and deploy a working real-time web application using modern JavaScript technologies.
