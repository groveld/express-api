// src/middlewares/rateLimiter.js
const rateLimiter = require('express-rate-limit');

const limiterMiddleware = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after a minute.',
});

module.exports = limiterMiddleware;
