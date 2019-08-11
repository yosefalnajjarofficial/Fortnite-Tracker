const express = require('express');
const router = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(router);

module.exports = app;
