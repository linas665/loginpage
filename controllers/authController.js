const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authController = {
  getRegister: (req, res) => res.render('register', { error: null, success: null }),

  register: async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findByEmail(email);
    if (userExists)
      return res.render('register', { error: 'User already exists', success: null });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.insert({ name, email, password: hashedPassword, role: 'user', status: 'active' });

    res.render('register', { error: null, success: 'Account created successfully!' });
  },

  getLogin: (req, res) => res.render('login', { error: null, success: null, admin: false }),

  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);

    if (!user)
      return res.render('login', { error: 'User not found', success: null, admin: false });
    if (user.status === 'disabled')
      return res.render('login', { error: 'Account disabled by admin', success: null, admin: false });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.render('login', { error: 'Invalid credentials', success: null, admin: false });

    req.session.user = { id: user._id, email: user.email, role: user.role };
    const token = jwt.sign({ email: user.email }, 'jwtSecretKey');
    res.cookie('token', token);

    if (user.role === 'admin') return res.redirect('/admin/dashboard');
    res.redirect('/dashboard');
  },

  dashboard: (req, res) => res.render('userDashboard', { user: req.session.user }),

  logout: (req, res) => {
    req.session.destroy(() => {
      res.clearCookie('token');
      res.redirect('/login');
    });
  }
};

module.exports = authController;
