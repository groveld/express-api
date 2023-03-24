// src/utils/logger.js
const { createLogger, format, transports } = require('winston');
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');

const loggerOptions = {
  level: 'debug',
  format: format.combine(format.timestamp(), format.json()),
};

const loggerTransports = [];

if (process.env.NODE_ENV === 'production') {
  const logtail = new Logtail('5MdyLnQpkYwtiBiLxJfwGzFW');
  loggerTransports.push(new LogtailTransport(logtail));
}

const isTesting = process.env.NODE_ENV === 'test';
loggerTransports.push(new transports.Console({ silent: isTesting }));

const logger = createLogger({
  loggerOptions,
  transports: loggerTransports,
});

module.exports = logger;
