const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');

router.get('/', (req, res) => res.redirect('/login'));
router.get('/register', authController.getRegister);
router.post('/register', authController.register);
router.get('/login', authController.getLogin);
router.post('/login', authController.login);
router.get('/dashboard', auth, authController.dashboard);
router.get('/logout', authController.logout);

module.exports = router;
