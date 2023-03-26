// File: src/middlewares/rateLimiter.js

const rateLimiter = require('express-rate-limit');

const rateLimiterMiddleware = rateLimiter({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after a minute.',
  headers: true,
});

module.exports = rateLimiterMiddleware;
