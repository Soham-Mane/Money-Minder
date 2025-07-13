# 💸 Money-Minder

**Your personal finance tracker built with React Native and Express — mobile-first, cloud-powered, and secure.**

This is more than just a mobile app. It’s a full-stack solution that helps users track income and expenses in real time, with secure authentication, and smooth UX and cloud based storage.

## 🌟 Features

🔐 **Secure Auth with Clerk**  
- Email-based login & signup with 6-digit verification  
- Persistent sessions & secure logout

📲 **Mobile App (React Native + Expo)**  
- Works on **both iOS & Android**  
- Pull to refresh transactions  
- Navigate between Home and Create screens  
- Track **current balance**  
- Add or delete income/expense entries  

🧠 **Smart Backend**  
- RESTful Express.js API  
- PostgreSQL database hosted on Neon  
- Rate limiting for protection (Redis-ready)  
- Deployed on Render or similar cloud services  

| Layer        | Technology                    |
|--------------|-------------------------------|
| Frontend     | React Native + Expo           |
| State Mgmt   | React Hooks, useContext       |
| Navigation   | React Navigation              |
| Auth         | Clerk                         |
| Backend      | Node.js + Express.js          |
| Database     | Neon (PostgreSQL on the cloud)|
| Deployment   | Render (Backend), Expo (Mobile) |
| Rate Limiting| Redis *(Optional)*            |
