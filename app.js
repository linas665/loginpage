const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { connectDB } = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = 3000;

// Connect DB
connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'superSecretKey',
  resave: false,
  saveUninitialized: true
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

// Routes
app.use('/', authRoutes);
app.use('/admin', adminRoutes);

// Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
