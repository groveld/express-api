// File: src/controllers/authController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const logger = require('../utils/logger');
const { jwtSecret, jwtRefreshSecret } = require('../config');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const access_token = jwt.sign({ userId: user.id }, jwtSecret, {
    expiresIn: '1h',
  });

  const refresh_token = jwt.sign({ userId: user.id }, jwtRefreshSecret, {
    expiresIn: '7d',
  });

  res.json({ message: 'Authenticated', access_token, refresh_token });
};

exports.refresh = async (req, res) => {
  const { refresh_token } = req.body;

  try {
    const decoded = jwt.verify(refresh_token, jwtRefreshSecret);
    const user = await User.findOne({ where: { id: decoded.userId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const access_token = jwt.sign({ userId: user.id }, jwtSecret, {
      expiresIn: '1h',
    });

    res.json({ access_token });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired refresh token' });
  }
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User created', user_id: newUser.id });
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Registration failed', error: err.message });
  }
};

exports.logout = async (req, _res) => {
  const requestId = req.requestId;
  logger.debug('Request received: GET /auth/logout', { requestId });
  // Placeholder for user logout logic
};
