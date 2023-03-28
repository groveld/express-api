// File: src/seeders/seedIscc.js

const ISCC = require('../models/isccModel');

const sampleData = [
  {
    cert_id: 'EU-ISCC-Cert-PL214-76140421',
    cert_holder: 'Eco Frying IKE, Athens- Votanikos, Greece',
    scope: 'CP',
    raw_material: 'UCO',
    valid_from: '2021-05-25',
    valid_until: '2022-05-24',
    issuing_cb: 'BV PL',
    location: '37.979114, 23.698799',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/EU-ISCC-Cert-PL214-76140421.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/EU-ISCC-Cert-PL214-76140421_audit.pdf',
    status: '10',
  },
  {
    cert_id: 'ISCC-PLUS-Cert-PL219-86612804',
    cert_holder: 'AVIFOOD S.L.U., Santa Bàrbara, Spain',
    scope: 'PO',
    valid_from: '2021-06-04',
    valid_until: '2022-06-03',
    issuing_cb: 'CU',
    location: '40.7377, -0.4993',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/ISCC-PLUS-Cert-PL219-86612804.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/ISCC-PLUS-Cert-PL219-86612804_audit.pdf',
    status: '10',
  },
  {
    cert_id: 'EU-ISCC-Cert-ID215-23210631',
    cert_holder: 'Asia Jaya Commodities Sdn Bhd, Kajang, Selangor, Malaysia',
    scope: 'CP, TRS',
    raw_material: 'Brown grease, Food',
    valid_from: '2021-06-20',
    valid_until: '2022-06-19',
    issuing_cb: 'Mutu Cert',
    location: '3.026055, 101.768666',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/EU-ISCC-Cert-ID215-23210631.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/EU-ISCC-Cert-ID215-23210631_audit.pdf',
    status: '10',
  },
  {
    cert_id: 'EU-ISCC-Cert-UA223-00122021',
    cert_holder:
      'PT. Agro Muko, Kec. Teras Terunjam, Kab. Mukomuko, Provinsi Bengkulu, Indonesia',
    scope: 'FG, OM',
    raw_material: 'Palm',
    valid_from: '2021-07-06',
    valid_until: '2022-07-05',
    issuing_cb: 'Aciter',
    location: '-2.6011083333333333, 101.27835',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/EU-ISCC-Cert-UA223-00122021.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/EU-ISCC-Cert-UA223-00122021_audit.pdf',
    status: '10',
  },
  {
    cert_id: 'EU-ISCC-Cert-DE100-02667121',
    cert_holder: 'Irish Biofuels Production Ltd, Wicklow, Ireland',
    scope: 'BP, TRS',
    raw_material: 'AF 1, Food',
    valid_from: '2021-07-14',
    valid_until: '2022-07-13',
    issuing_cb: 'SGS',
    location: '-6.050214, 52.996082',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/EU-ISCC-Cert-DE100-02667121.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/EU-ISCC-Cert-DE100-02667121_audit.pdf',
    status: '10',
  },
  {
    cert_id: 'EU-ISCC-Cert-PL214-71110721',
    cert_holder: 'Ekoper d.o.o., Koper, Slovenia',
    scope: 'TR',
    valid_from: '2021-07-23',
    valid_until: '2022-07-22',
    issuing_cb: 'BV PL',
    location: '45.548344, 13.737171',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/EU-ISCC-Cert-PL214-71110721.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/EU-ISCC-Cert-PL214-71110721_audit.pdf',
    status: '10',
  },
  {
    cert_id: 'EU-ISCC-Cert-IT206-1021',
    cert_holder:
      'CORAEX - Cooperativa de Recogida de Aceite de Extremadura, Badajoz, Spain',
    scope: 'CP',
    raw_material: 'UCO',
    valid_from: '2021-08-03',
    valid_until: '2022-08-02',
    issuing_cb: 'RINA',
    location: '38.89901, -6.994163',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/EU-ISCC-Cert-IT206-1021.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/EU-ISCC-Cert-IT206-1021_audit.pdf',
    status: '10',
  },
  {
    cert_id: 'ISCC-PLUS-Cert-DE100-10147121',
    cert_holder: 'Trioworld Smålandsstenar AB, Smålandsstenar, Sweden',
    scope: 'OT',
    valid_from: '2021-06-02',
    valid_until: '2022-06-01',
    issuing_cb: 'SGS',
    location: '57.15714045458345, 13.413075257379392',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/ISCC-PLUS-Cert-DE100-10147121.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/ISCC-PLUS-Cert-DE100-10147121_audit.pdf',
    status: '10',
  },
  {
    cert_id: 'EU-ISCC-Cert-DE143-22200123',
    cert_holder:
      'Este (Shandong) Grease Group Co., Ltd., Zhanhua District, Binzhou City, China',
    scope: 'CP',
    raw_material: 'w/r (processing',
    valid_from: '2021-08-28',
    valid_until: '2022-08-27',
    issuing_cb: 'DIN CERTCO',
    location: '37.7114, 118.1675',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/EU-ISCC-Cert-DE143-22200123.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/EU-ISCC-Cert-DE143-22200123_audit.pdf',
    status: '20',
  },
  {
    cert_id: 'EU-ISCC-Cert-GR209-1271682',
    cert_holder:
      'Maria Styliani Fragkouli & Despoina Fragkouli O.E. - Recytec by Fragkouli, Moschato, Athens, Greece',
    scope: 'CP',
    raw_material: 'UCO',
    valid_from: '2021-09-29',
    valid_until: '2022-09-28',
    issuing_cb: 'EuroCert',
    location: '37.95924, 23.68169',
    cert_url:
      'https://certificates.iscc-system.org/cert-pdf/EU-ISCC-Cert-GR209-1271682.pdf',
    audit_url:
      'https://certificates.iscc-system.org/cert-audit/EU-ISCC-Cert-GR209-1271682_audit.pdf',
    status: '10',
  },
];

const seedIscc = async () => {
  try {
    await ISCC.sync({ force: false });
    await ISCC.bulkCreate(sampleData);
    console.log('ISCC seeding completed.');
  } catch (error) {
    console.error('ISCC seeding failed:', error);
  } finally {
    process.exit();
  }
};

seedIscc();
