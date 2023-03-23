// src/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const logger = require('../utils/logger');
const { users } = require('../models/User');

const jwtSecret = 'your-secret-key';

exports.login = async (req, res) => {
  logger.info(`Request received - GET /auth/login`, {
    requestId: req.requestId,
  });
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }

  const access_token = jwt.sign({ userId: user.id }, jwtSecret, {
    expiresIn: '1h',
  });
  const refresh_token = jwt.sign({ userId: user.id }, jwtSecret, {
    expiresIn: '2h',
  });

  res.json({ message: 'Authenticated', access_token, refresh_token });
};

exports.refresh = async (req, res) => {
  // Placeholder for token refresh logic
};

exports.logout = async (req, res) => {
  // Placeholder for user logout logic
};

exports.register = async (req, res) => {
  // Placeholder for user registration logic
};

exports.protected = async (req, res) => {
  res.status(200).json({ message: 'Protected route' });
};
