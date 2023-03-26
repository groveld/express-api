// File: src/config.js

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

function validateEnvVariable(name) {
  if (!process.env[name]) {
    throw new Error(`Missing environment variable: ${name}`);
  }
}

const requiredVariables = ['NODE_ENV', 'PORT', 'LOGTAIL_KEY', 'JWT_SECRET'];

requiredVariables.forEach(validateEnvVariable);

module.exports = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  logtailKey: process.env.LOGTAIL_KEY,
  jwtSecret: process.env.JWT_SECRET,
};
