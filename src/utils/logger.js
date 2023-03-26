// File: src/utils/logger.js

const { createLogger, format, transports } = require('winston');
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');
const { environment, logtailKey } = require('../config');

const loggerOptions = {
  level: 'debug',
  format: format.combine(format.timestamp(), format.json()),
};

const loggerTransports = [];

if (environment === 'production') {
  const logtail = new Logtail(logtailKey);
  loggerTransports.push(new LogtailTransport(logtail));
}

const isTesting = environment === 'test';
loggerTransports.push(new transports.Console({ silent: isTesting }));

const logger = createLogger({
  loggerOptions,
  transports: loggerTransports,
});

module.exports = logger;
