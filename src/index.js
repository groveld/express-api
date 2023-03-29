// File: src/index.js

const app = require('./app');
const { appPort } = require('./config');

app.listen(appPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${appPort}`);
});
