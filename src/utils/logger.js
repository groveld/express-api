// src/utils/logger.js
const { createLogger, format, transports } = require('winston');
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');

const loggerOptions = {
  level: 'debug',
  format: format.combine(format.timestamp(), format.json()),
};

const transportOptions = [new transports.Console()];

if (process.env.NODE_ENV == 'production') {
  const logtail = new Logtail('5MdyLnQpkYwtiBiLxJfwGzFW');
  transportOptions.push(new LogtailTransport(logtail));
}

const logger = createLogger({
  loggerOptions,
  transports: transportOptions,
});

module.exports = logger;
