// config/logger.js
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message, metadata }) => {
      const requestId =
        metadata && metadata.requestId ? metadata.requestId : '-';
      const metaInfo =
        metadata && metadata.info ? JSON.stringify(metadata.info) : '';
      return `${timestamp} ${level} ${requestId} ${message} ${metaInfo}`;
    }),
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
