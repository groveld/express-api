// File: src/middlewares/requestLogger.js

const morgan = require('morgan');
const requestIp = require('request-ip');
const geoip = require('geoip-lite');
const { ulid } = require('ulid');

morgan.token('ip', req => req.clientIp);

morgan.token('country', req => {
  const geo = geoip.lookup(req.clientIp);
  return geo ? geo.country : 'Unknown';
});

morgan.token('id', req => req.requestId);

const morganFormat =
  ':id :remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms ":referrer" ":user-agent" :ip :country X-Forwarded-For=:req[X-Forwarded-For] X-Real-IP=:req[X-Real-IP]';

const requestLogger = (req, res, next) => {
  req.clientIp = requestIp.getClientIp(req);
  req.requestId = ulid();

  morgan(morganFormat)(req, res, next);
};

module.exports = requestLogger;
