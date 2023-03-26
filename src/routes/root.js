// src/routes/auth.js
const router = require('express').Router();
const rootController = require('../controllers/rootController');
const auth = require('../middlewares/authentication');

router.get('/ping', rootController.ping);
router.get('/data', auth, rootController.data);

module.exports = router;
