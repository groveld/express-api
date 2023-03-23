// src/middlewares/errorHandler.js
const util = require('util');

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

  res.status(errorPayload.code).json(errorPayload);
}

module.exports = errorHandlerMiddleware;
