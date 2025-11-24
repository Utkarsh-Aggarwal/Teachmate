🎓 TeachMate

Real-time Language Learning Social Platform

⭐ About the Project

TeachMate is a real-time platform where users can connect, chat, and video call to learn languages together. It blends social networking features with WebRTC-based video calling, enabling a modern and interactive learning experience.

Users can:

Create and manage accounts

Add or accept friends

Chat instantly

Make high-quality P2P video calls

See online/offline friend status

Built using React, Node.js, MongoDB, WebSockets, Redux, and WebRTC, TeachMate is scalable, fast, and ideal for real-time apps.

🚀 Features
🔐 Authentication

Secure login & signup using JWT

Protected routes

Persistent sessions

👥 Friend System

Search for users

Send/accept friend requests

Maintain your learning network

💬 Real-Time Messaging

Delivered instantly through WebSockets

Read/delivered indicators

Smooth chat UI

📹 Video Calling (WebRTC)

High-quality peer-to-peer calls

Integrated WebSocket signaling

No third-party dependencies

🟢 Live Online Status

Real-time presence updates

Shows friend availability instantly

🗄️ Redux State Management

Global control over auth, chat, friends, calls

Predictable and scalable

🛠 Tech Stack
Frontend

React

Redux Toolkit

WebRTC

WebSocket client

Tailwind / CSS

Backend

Node.js

Express

MongoDB + Mongoose

WebSocket (Socket.io / ws)

JWT Authentication

📂 Folder Structure
/client
   ├── src
   │   ├── components
   │   ├── pages
   │   ├── redux
   │   ├── hooks
   │   └── utils

/server
   ├── controllers
   ├── models
   ├── routes
   ├── websocket
   └── config

🖼️ Screenshots

(Replace these with real images)

/assets/screenshot1.png - Login Page
/assets/screenshot2.png - Chat Window
/assets/screenshot3.png - Video Call Screen

🎥 Demo GIFs

(Add screen recordings here)

/assets/demo-chat.gif
/assets/demo-call.gif

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/teachmate.git
cd teachmate

🖥️ Backend Setup
cd server
npm install
npm start

Create .env inside /server
MONGO_URI=
JWT_SECRET=
PORT=5000

💻 Frontend Setup
cd client
npm install
npm start

📡 How It Works

TeachMate relies on three core systems:

JWT Authentication — protects the entire app

WebSockets — handles messaging & presence

WebRTC — enables video call signaling (offer, answer, ICE)

Simple data flow:

User logs in → WebSocket connects → Friends sync →
Chat messages appear instantly → Video calls established via WebRTC

🤝 Contributing

Fork this repository

Create a branch (feature/myFeature)

Commit your changes

Open a pull request

📜 License

MIT License © 2025

🟨 GitHub Tags (Topics)
react
nodejs
mongodb
websocket
webrtc
redux
realtime-chat
video-call
language-learning
mern
social-app
