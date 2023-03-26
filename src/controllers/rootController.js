// src/controllers/authController.js
const logger = require('../utils/logger');

const { name, version, description } = require('../../package.json');

exports.ping = async (req, res) => {
  const requestId = req.requestId;
  logger.debug('Request received: GET /ping', { requestId });

  res.status(200).json({
    name,
    description,
    version,
    uptime: process.uptime(),
    yourip: req.ip,
  });
};

exports.data = async (req, res) => {
  const requestId = req.requestId;
  logger.debug('Request received: GET /data', { requestId });

  res.status(200).json({ message: 'Protected route' });
};
