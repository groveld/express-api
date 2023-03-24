// src/routes/auth.js
const router = require('express').Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/authentication');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', auth, authController.protected);
router.get('/ping', authController.ping);

module.exports = router;
