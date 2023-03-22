// src/app.js
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const corsMiddleware = require('./middlewares/cors');
const limiterMiddleware = require('./middlewares/rateLimiter');
const authRoutes = require('./routes/auth');

const openapiValidator = require('express-openapi-validator');
const path = require('path');
const openapiDocumentPath = path.join('assets', 'openapi.yaml');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(corsMiddleware);
app.use(helmet());
app.use(compression());
app.use(limiterMiddleware);

app.use(
  openapiValidator.middleware({
    apiSpec: openapiDocumentPath,
    validateRequests: true,
    validateResponses: true,
  }),
);

app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  res.status(err.status).json({
    errors: err.errors,
  });
});

module.exports = app;
