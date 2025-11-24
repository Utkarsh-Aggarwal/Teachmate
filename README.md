Here is your **complete, production-ready README.md** in clean **Markdown format**, with your uploaded screenshots already embedded using the given local file paths.

You can **copy–paste directly** into your `README.md` file.

---

# TeachMate

TeachMate is a real-time language learning social platform where users can connect, add friends, chat instantly, and start WebRTC-powered video calls. It helps learners practice languages with real people worldwide through seamless communication tools and a clean interface.

---

## 🚀 Features

### ✅ Authentication

Secure login & signup with JWT-based authentication.

### ✅ User Profiles & Onboarding

Users complete a profile with:

* Full name
* Bio
* Native language
* Learning language
* Location
* Auto-generated avatar

### ✅ Add Friends & Connect

* Discover new learners based on language preferences
* Send/accept friend requests
* Build your learning network

### ✅ Real-Time Chat (WebSockets)

* Instant messaging
* Online/offline status
* Message delivery in real time

### ✅ WebRTC Video Calling

* Peer-to-peer video call room creation
* Call invites sent through chat
* Smooth low-latency video sessions

### ✅ Modern Tech Stack

* **Frontend:** React, Redux Toolkit
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Real-time:** Socket.IO
* **Video:** WebRTC

---

## 📸 Screenshots

### 🔐 Login Page

![Login](sandbox:/mnt/data/Screenshot%202024-07-25%20013943.png)

---

### 🧑‍🎓 Profile Onboarding

![Profile](sandbox:/mnt/data/Screenshot%202025-11-24%20201623.png)

---

### 🤝 Friends & New Learners

![Friends](sandbox:/mnt/data/Screenshot%202025-11-24%20201902.png)
![Meet New Learners](sandbox:/mnt/data/Screenshot%202025-11-24%20201922.png)

---

### 💬 Chat + Video Call

![Chat](sandbox:/mnt/data/Screenshot%202025-11-24%20202139.png)

---

## 🛠️ Tech Stack

| Category         | Technologies                                |
| ---------------- | ------------------------------------------- |
| Frontend         | React, Redux Toolkit, Tailwind / Custom CSS |
| Backend          | Node.js, Express                            |
| Real-time        | Socket.IO                                   |
| Video Calling    | WebRTC                                      |
| Database         | MongoDB, Mongoose                           |
| Authentication   | JWT, bcrypt                                 |
| State Management | Redux Toolkit                               |
| Deployment       | (Add your deployment details if any)        |

---

## 📦 Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/teachmate.git
cd teachmate
```

---

## 🖥️ Backend Setup

### Install dependencies:

```bash
cd backend
npm install
```

### Create `.env` file:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

### Start backend:

```bash
npm start
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 WebRTC & WebSocket Notes

* WebRTC uses peer-to-peer connections
* Signaling (offer/answer exchange) handled via Socket.IO
* Users receive call invites directly inside the chat
* After both clients accept, the P2P video session starts

---

## 📁 Project Structure

```
teachmate/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
└── README.md
```

---

## 🤝 Contribution

Feel free to open issues, suggest features, or contribute through pull requests.

---

## ⭐ If you like this project…

Give the repository a **star** ⭐ on GitHub.
Your support motivates future improvements!

---

If you want, I can also generate:

✅ GitHub Release Notes
✅ A better project tagline
✅ Tech stack badges
✅ A demo GIF preview section

Just tell me!
