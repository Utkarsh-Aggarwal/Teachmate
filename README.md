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

<img width="600" height="350" alt="Screenshot 2025-11-24 201623" src="https://github.com/user-attachments/assets/86e41783-bafa-4a2a-8c01-0fca33a015b0" />


---

### 🧑‍🎓 Profile Onboarding

<img width="600" height="350" alt="Screenshot 2025-11-24 201902" src="https://github.com/user-attachments/assets/4a4dfd0f-92b5-4d2f-aabe-33f8245d9115" />


---

### 🤝 Friends & New Learners

<img width="600" height="350" alt="Screenshot 2025-11-24 201922" src="https://github.com/user-attachments/assets/e316d443-4f3b-4907-bfda-2d3e8b8256c4" />


---

### 💬 Chat + Video Call

<img width="600" height="350" alt="Screenshot 2025-11-24 202139" src="https://github.com/user-attachments/assets/494e63f3-9c06-468d-8ae3-d3b4d3e144c2" />


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
