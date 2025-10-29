# 🚀 Node.js Authentication System (Admin & User Dashboard)

This project is a **Node.js + Express + MongoDB** based authentication system that supports both **User** and **Admin** roles.  
It includes features like **registration, login, session management, role-based access control**, and **user account management** (enable/disable by admin).

---

## 📁 Project Structure

```
├── pages/
│   ├── login.ejs
│   ├── register.ejs
│   ├── userDashboard.ejs
│   └── admin.ejs
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Features

✅ User Registration (with password hashing using **bcrypt**)  
✅ User Login (with **JWT** and **Sessions**)  
✅ Role-based Access (User/Admin)  
✅ Admin Dashboard to **enable/disable users**  
✅ Session & Cookie Management  
✅ Secure authentication with **bcrypt** & **jsonwebtoken**  
✅ EJS Templating for frontend pages  

---

## 🧠 Tech Stack

| Component | Technology |
|------------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Templating Engine | EJS |
| Authentication | express-session, bcrypt, jsonwebtoken |
| Cookie Handling | cookie-parser |

---

## 🧩 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/node-auth-system.git
cd node-auth-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start MongoDB
Make sure MongoDB is running locally (default port: **27017**).  
If you’re using MongoDB Compass or Atlas, update the connection URL in:
```js
const url = 'mongodb://127.0.0.1:27017';
```

### 4. Run the server
```bash
node app.js
```

### 5. Access the app
Open your browser and go to:  
👉 **http://localhost:3000**

---

## 🔐 Default Roles

| Role | Access |
|------|--------|
| User | Can log in and view personal dashboard |
| Admin | Can view all users, enable/disable accounts |

To make an admin, manually update a user’s role in MongoDB:
```js
db.users.updateOne({ email: "admin@example.com" }, { $set: { role: "admin" } })
```

---

## 🧱 Folder Explanation

| Folder/File | Description |
|--------------|-------------|
| `/pages/` | EJS templates for register, login, dashboard, and admin pages |
| `app.js` | Main server file containing all routes and logic |
| `package.json` | Project metadata and dependencies |

---

## 🧰 Environment Variables (Optional)
You can store sensitive data like JWT secret and session key in `.env`:
```
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017
SESSION_SECRET=superSecretKey
JWT_SECRET=jwtSecretKey
```
Then load them using `dotenv`:
```js
require('dotenv').config();
```

---

## 👤 User Flow

1. User registers → password is **hashed** and stored.  
2. User logs in → password is **validated using bcrypt**.  
3. Session & JWT are generated → stored in **cookies**.  
4. Admin can **view all users** and change their status (active/disabled).  
5. Disabled users cannot log in until reactivated by admin.

---

## 🧾 Example Screens

| Page | Description |
|------|-------------|
| `/register` | Register a new user |
| `/login` | User/Admin login page |
| `/dashboard` | User’s personal dashboard |
| `/admin/dashboard` | Admin dashboard to manage users |

---

## 🧹 To Do / Future Improvements
- ✅ Email verification using nodemailer  
- ✅ Password reset feature  
- ✅ Add pagination in admin dashboard  
- ✅ Use environment variables for secrets  
- ✅ Improve UI with Tailwind or Bootstrap  

---

## 👨‍💻 Author
**Linas**  
📧 Email: [linasliyakath@gmail.com]  
🌐 GitHub: [github.com/yourusername](https://github.com/linas665)

---
