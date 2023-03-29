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

const requiredVariables = [
  'APP_PORT',
  'LOGTAIL_KEY',
  'SALT_ROUNDS',
  'JWT_SECRET',
  'JWT_REFRESH_SECRET',
  'DB_USERNAME',
  'DB_PASSWORD',
  'DB_NAME',
  'DB_HOST',
  'DB_PORT',
];

requiredVariables.forEach(validateEnvVariable);

module.exports = {
  environment: process.env.NODE_ENV,
  appPort: process.env.APP_PORT,
  logtailKey: process.env.LOGTAIL_KEY,
  saltRounds: process.env.SALT_ROUNDS,
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
};
