// src/app.js
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const corsMiddleware = require('./middlewares/cors');
const rateLimiterMiddleware = require('./middlewares/rateLimiter');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const requestIdMiddleware = require('./middlewares/requestId');
const OpenApiValidator = require('express-openapi-validator');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(corsMiddleware);
app.use(helmet());
app.use(compression());
app.use(rateLimiterMiddleware);
app.use(requestIdMiddleware);

app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, '../assets/openapi.yaml'),
    validateRequests: true,
    validateResponses: true,
  }),
);

app.use('/auth', authRoutes);

app.use(errorHandlerMiddleware);

module.exports = app;
