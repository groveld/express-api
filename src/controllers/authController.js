// src/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users } = require('../models/User');

const jwtSecret = 'your-secret-key';

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

  res.json({ message: 'Authenticated', token });
};

exports.register = async (req, res) => {
  // Placeholder for user registration logic
};

exports.protected = async (req, res) => {
  res.status(200).json({ message: 'Protected route' });
};
