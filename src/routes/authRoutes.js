// src/routes/authRoutes.js
const router = require('express').Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/authentication');

router.post('/login', authController.login);
router.post('/refresh', auth, authController.refresh);
router.post('/logout', auth, authController.logout);
router.post('/register', auth, authController.register);

module.exports = router;
