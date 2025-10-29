function auth(req, res, next) {
  if (!req.session.user) return res.redirect('/login');
  next();
}

function adminAuth(req, res, next) {
  if (!req.session.user || req.session.user.role !== 'admin')
    return res.redirect('/admin/login');
  next();
}

module.exports = { auth, adminAuth };
