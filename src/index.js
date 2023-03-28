// File: src/index.js

const app = require('./app');
const { appPort } = require('./config');

app.listen(appPort, () => {
  console.log(`Server running on port ${appPort}`);
});
