// File: src/routes/rootRoutes.js

const router = require('express').Router();
const certController = require('../controllers/certController');
const auth = require('../middlewares/authentication');

router.get('/', auth, certController.getCert);
router.get('/:certId', auth, certController.getCertId);

module.exports = router;
