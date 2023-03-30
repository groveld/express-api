// File: src/middlewares/requestLogger.js

const morgan = require('morgan');
const { ulid } = require('ulid');
const requestIp = require('request-ip');
const geoip = require('geoip-lite');
const logger = require('../utils/logger');

// Function to generate a meaningful message based on the status code
function getStatusMessage(
  statusCode,
  httpMethod,
  url,
  ip,
  country,
  responseTime,
) {
  let message = '';

  if (statusCode >= 200 && statusCode < 300) {
    message = 'Successful';
  } else if (statusCode >= 300 && statusCode < 400) {
    message = 'Redirection';
  } else if (statusCode >= 400 && statusCode < 500) {
    message = 'Client Error';
  } else if (statusCode >= 500) {
    message = 'Server Error';
  }

  return `${message}: ${httpMethod} ${url} [${responseTime} ms] ${ip} (${country})`;
}

// Custom Morgan tokens
morgan.token('requestId', req => req.requestId);
morgan.token('ip', req => req.clientIp);
morgan.token('country', req => {
  const geo = geoip.lookup(req.clientIp);
  return geo ? geo.country : 'Unknown';
});
morgan.token('statusMessage', (req, res) => {
  const statusCode = res.statusCode;
  const httpMethod = req.method;
  const url = req.originalUrl;
  const ip = req.clientIp;
  const country = morgan['country'](req);
  const responseTime = morgan['response-time'](req, res);
  return getStatusMessage(
    statusCode,
    httpMethod,
    url,
    ip,
    country,
    responseTime,
  );
});

// JSON data format for logs
const jsonData = {
  message: ':statusMessage',
  requestId: ':requestId',
  remoteAddr: ':remote-addr',
  remoteUser: ':remote-user',
  timestamp: ':date[iso]',
  method: ':method',
  url: ':url',
  httpVersion: ':http-version',
  statusCode: ':status',
  contentLength: ':res[content-length]',
  responseTime: ':response-time',
  referrer: ':referrer',
  userAgent: ':user-agent',
  ip: ':ip',
  country: ':country',
  xForwardedFor: ':req[X-Forwarded-For]',
  xRealIp: ':req[X-Real-IP]',
};

// Custom Winston stream for writing log messages
const winstonStream = {
  write: message => {
    const logData = JSON.parse(message);
    logger.log('info', logData);
  },
};

// Request logger middleware
const requestLogger = (req, res, next) => {
  req.requestId = ulid();
  req.clientIp = requestIp.getClientIp(req);

  morgan(JSON.stringify(jsonData), { stream: winstonStream })(req, res, next);
};

module.exports = requestLogger;
