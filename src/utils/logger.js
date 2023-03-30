// File: src/utils/logger.js

const { createLogger, transports, format } = require('winston');
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');
const { logtailKey } = require('../config');

// Initialize Logtail instance
const logtail = new Logtail(logtailKey);

// Create a custom console format
const customConsoleFormat = format.printf(({ timestamp, level, message }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

// Create logger with Logtail and Console transports
const logger = createLogger({
  format: format.combine(
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: [
    new LogtailTransport(logtail),
    new transports.Console({
      format: customConsoleFormat,
    }),
  ],
});

module.exports = logger;
