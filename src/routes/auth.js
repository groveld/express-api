// src/routes/auth.js
const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authController.protected);

module.exports = router;
