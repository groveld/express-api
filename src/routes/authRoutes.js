// File: src/routes/authRoutes.js

const router = require('express').Router();
const auth = require('../middlewares/authentication');
const authValidator = require('../validators/authValidator');
const authController = require('../controllers/authController');

router.post('/login', authValidator.validateLogin, authController.login);
router.post('/refresh', auth, authController.refresh);
router.post('/logout', auth, authController.logout);
router.post('/register', auth, authController.register);

module.exports = router;
