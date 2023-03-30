// File: src/middlewares/authentication.js

const { verify } = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No authorization token provided' });
  }

  const token = authHeader.split(' ')[1];
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;

  if (!token || !jwtRegex.test(token)) {
    return res.status(401).json({ message: 'Invalid token format' });
  }

  try {
    const decoded = verify(token, jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticationMiddleware;
