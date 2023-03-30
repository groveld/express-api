// File: src/validators/tokenValidator.js

const { body, validationResult } = require('express-validator');
const { verify } = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;

exports.validateToken = [
  body('token')
    .trim() // Remove leading and trailing whitespaces
    .matches(jwtRegex) // Check if token format is correct
    .withMessage('Invalid token format')
    .custom(token => {
      try {
        verify(token, jwtSecret);
        return true;
      } catch (err) {
        throw new Error('Invalid or expired token');
      }
    }),

  // Middleware to handle validation errors and format the error response
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorsObject = errors.array().reduce((acc, error) => {
        acc[error.param] = error.msg;
        return acc;
      }, {});

      return res.status(400).json({ errors: errorsObject });
    }
    next();
  },
];
