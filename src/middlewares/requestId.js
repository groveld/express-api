// File: src/middlewares/requestId.js

const { ulid } = require('ulid');

// eslint-disable-next-line no-unused-vars
const requestIdMiddleware = (req, res, next) => {
  req.requestId = ulid();
  next();
};

module.exports = requestIdMiddleware;
