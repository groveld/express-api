// src/utils/logger.js
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'silly',
      format: format.combine(
        format.colorize(),
        format.align(),
        format.timestamp(),
        format.printf(({ timestamp, level, message, requestId }) => {
          return `${timestamp} ${requestId} ${level} ${message}`;
        }),
      ),
    }),
    new transports.File({
      filename: 'app-error.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: 'app-debug.log',
      level: 'debug',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
