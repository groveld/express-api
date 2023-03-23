// src/middlewares/errorHandler.js
const util = require('util');
const logger = require('../utils/logger');

function createOpenApiErrorPayload(err) {
  return {
    code: err.status || 500,
    message: err.message,
    errors: err.errors,
  };
}

function errorHandlerMiddleware(err, req, res, next) {
  const isClientError = err.status >= 400 && err.status < 500;

  if (!isClientError) {
    console.log(util.inspect(err, { depth: null, colors: true }));
  }

  const errorPayload = createOpenApiErrorPayload(err);

  logger.error(`Error: ${err.message}`, {
    requestId: req.requestId,
    info: {
      ip: req.ip,
      userAgent: req.headers['user-agent'],
    },
  });

  res.status(errorPayload.code).json(errorPayload);
}

module.exports = errorHandlerMiddleware;
