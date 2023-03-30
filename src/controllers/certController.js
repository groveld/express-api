// File: src/controllers/certController.js

const asyncHandler = require('express-async-handler');
const ISCC = require('../models/isccModel');

exports.getCert = asyncHandler(async (_req, res) => {
  const certs = await ISCC.findAll();

  if (!certs) {
    return res.status(404).json({ message: 'Certificates not found' });
  }

  res.status(200).json({ message: 'Certificates found', certificates: certs });
});

exports.getCertId = asyncHandler(async (req, res) => {
  const certId = req.params.certId;
  const cert = await ISCC.findOne({ where: { cert_id: certId } });

  if (!cert) {
    return res.status(404).json({ message: 'Certificate not found' });
  }

  res.status(200).json({ message: 'Certificate found', certificate: cert });
});
