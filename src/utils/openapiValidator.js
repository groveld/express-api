// src/utils/openapiValidator.js
const { OpenApiValidator } = require('express-openapi-validator');
const path = require('path');

const openapiDocumentPath = path.join(__dirname, '../openapi.yaml');

const openapiMiddleware = () => {
  const openApiValidator = OpenApiValidator({
    apiSpec: openapiDocumentPath,
    validateRequests: true,
    validateResponses: true,
  });

  return async (req, res, next) => {
    try {
      await openApiValidator.install(req.app);
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = openapiMiddleware;
