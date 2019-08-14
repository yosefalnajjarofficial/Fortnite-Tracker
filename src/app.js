const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 5000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);

app.use(express.static('public'));

app.use(router);

module.exports = app;
