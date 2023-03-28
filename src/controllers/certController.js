// File: src/controllers/authController.js

const ISCC = require('../models/isccModel');

exports.getCert = async (_req, res) => {
  try {
    const certs = await ISCC.findAll();

    if (!certs) {
      return res.status(404).json({ message: 'Certificates not found' });
    }

    res
      .status(200)
      .json({ message: 'Certificates found', certificates: certs });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired refresh token' });
  }
};

exports.getCertId = async (req, res) => {
  const certId = req.params.certId;

  try {
    const cert = await ISCC.findOne({ where: { cert_id: certId } });

    if (!cert) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.status(200).json({ message: 'Certificate found', certificate: cert });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired refresh token' });
  }
};
