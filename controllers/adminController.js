const User = require('../models/userModel');

const adminController = {
  getLogin: (req, res) => res.render('login', { error: null, success: null, admin: true }),

  dashboard: async (req, res) => {
    const users = await User.findAllUsers();
    res.render('admin', { users, success: null, error: null });
  },

  enableUser: async (req, res) => {
    await User.updateStatus(req.params.id, 'active');
    res.redirect('/admin/dashboard');
  },

  disableUser: async (req, res) => {
    await User.updateStatus(req.params.id, 'disabled');
    res.redirect('/admin/dashboard');
  }
};

module.exports = adminController;
