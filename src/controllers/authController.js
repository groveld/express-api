// File: src/controllers/authController.js

const asyncHandler = require('express-async-handler');
const { jwtSecret, jwtRefreshSecret, saltRounds } = require('../config');
const { sign, verify } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');
const User = require('../models/userModel');

exports.login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const samePassword = await compare(password, user.password);

  if (!samePassword) {
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
});

exports.refresh = asyncHandler(async (req, res) => {
  const { refresh_token } = req.body;

  const decoded = verify(refresh_token, jwtRefreshSecret);

  const user = await User.findOne({ where: { id: decoded.userId } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const access_token = sign({ userId: user.id }, jwtSecret, {
    expiresIn: '1h',
  });

  res.json({ access_token });
});

exports.register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await hash(password, saltRounds);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'User created', user_id: newUser.id });
});

exports.logout = asyncHandler(async (req, res) => {
  const requestId = req.requestId;

  res.status(200).json({ message: `User logged out: ${requestId}` });
});
