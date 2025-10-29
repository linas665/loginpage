const express = require('express');
const router = express.Router();
const { adminAuth } = require('../middlewares/authMiddleware');
const adminController = require('../controllers/adminController');

router.get('/login', adminController.getLogin);
router.get('/dashboard', adminAuth, adminController.dashboard);
router.get('/enable/:id', adminAuth, adminController.enableUser);
router.get('/disable/:id', adminAuth, adminController.disableUser);

module.exports = router;
