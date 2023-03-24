// src/middlewares/errorHandler.js
const util = require('util');
const logger = require('../utils/logger');

const errorHandlerMiddleware = (err, req, res, next) => {
  // Log the error to Logtail
  logger.error('Server error', {
    requestId: req.requestId,
    info: {
      error: err.message,
      stack: err.stack,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
    },
  });

  // Check if the error is from express-openapi-validator
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  // Handle other errors
  res.status(err.status || 500).json({
    error: err.message || 'An internal server error occurred',
  });
};

module.exports = errorHandlerMiddleware;
