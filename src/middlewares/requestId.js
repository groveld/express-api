// File: src/middlewares/requestId.js

const { ulid } = require('ulid');

const requestIdMiddleware = (req, res, next) => {
  req.requestId = ulid();
  next();
};

module.exports = requestIdMiddleware;
