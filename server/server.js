// Imports for Server functionality..
require('./database/mongoose-connection');
const express = require('express');
const path = require('path');
const bp = require('body-parser');
const routes = require('./routes/routes');
const app = express();

// localhost port..
let PORT = process.env.PORT || 3000;

// Custom Middleware..
app.use((req, res, next) => {
  console.info(`Method: ${req.method} URL: ${req.url}`);
  next();
});

// Middleware
app.use(express.static(path.join(__dirname, '../client')));

app.use(bp.urlencoded({ extended : true }));

app.use(bp.json());
routes(app);

// listen for connection..
app.listen(PORT, () => {
  console.info(`\n ~ Server running on http://localhost:${PORT} ~ \n\n ~ Holding down " control + c " keys will stop the server. ~ \n`);
});

// Export app..
module.exports = app;

