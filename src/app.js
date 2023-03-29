// File: src/app.js

const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
// const cookieParser = require('cookie-parser');
// const csurf = require('csurf');
const corsMiddleware = require('./middlewares/cors');
const rateLimiterMiddleware = require('./middlewares/rateLimiter');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
// const requestIdMiddleware = require('./middlewares/requestId');
const requestLoggerMiddleware = require('./middlewares/requestLogger');
const OpenApiValidator = require('express-openapi-validator');
const rootRoutes = require('./routes/rootRoutes');
const authRoutes = require('./routes/authRoutes');
const certRoutes = require('./routes/certRoutes');

// deepcode ignore UseCsurfForExpress: Will come back to this later
const app = express();

app.use(helmet());
app.use(corsMiddleware);
app.use(compression());
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimiterMiddleware);
app.use(requestLoggerMiddleware);
// app.use(csurf({ cookie: true }));

app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, '../openapi/openapi.yaml'),
    validateRequests: true,
    validateResponses: true,
  }),
);

app.use('/', rootRoutes);
app.use('/auth', authRoutes);
app.use('/cert', certRoutes);

app.use(errorHandlerMiddleware);

module.exports = app;
