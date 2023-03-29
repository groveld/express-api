// File: src/controllers/authController.js

const { sign, verify } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');
const User = require('../models/userModel');
const { jwtSecret, jwtRefreshSecret } = require('../config');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    const samePassword = await compare(password, user.password);

    if (!user || !samePassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const access_token = sign({ userId: user.id }, jwtSecret, {
      expiresIn: '1h',
    });

    const refresh_token = sign({ userId: user.id }, jwtRefreshSecret, {
      expiresIn: '7d',
    });

    res.status(200).json({
      message: 'Authentication successful',
      access_token,
      refresh_token,
    });
  } catch (error) {
    res.status(400).json({ message: 'Missing credentials' });
  }
};

exports.refresh = async (req, res) => {
  const { refresh_token } = req.body;

  try {
    const decoded = verify(refresh_token, jwtRefreshSecret);
    const user = await User.findOne({ where: { id: decoded.userId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const access_token = sign({ userId: user.id }, jwtSecret, {
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
    const hashedPassword = await hash(password, 10);
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

// eslint-disable-next-line no-unused-vars
exports.logout = async (req, res) => {
  const requestId = req.requestId;
  res.status(200).json({ message: `User logged out: ${requestId}` });
};
