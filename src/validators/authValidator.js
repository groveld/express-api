// File: src/validators/authValidator.js

const { body, validationResult } = require('express-validator');

exports.validateLogin = [
  // Validate and sanitize the username
  body('username')
    .trim() // Remove leading and trailing whitespaces
    .isLength({ min: 1 }) // Check if username is not empty
    .withMessage('Username is required')
    .isAlphanumeric()
    .withMessage('Username must be alphanumeric')
    .escape(), // Escape any potentially harmful characters

  // Validate and sanitize the password
  body('password')
    .trim() // Remove leading and trailing whitespaces
    .isLength({ min: 8 }) // Check if the password has a minimum length of 8 characters
    .withMessage('Password must be at least 8 characters long')
    .escape(), // Escape any potentially harmful characters

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
