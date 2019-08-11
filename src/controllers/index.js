const express = require('express');

const router = express.Router();

const request = require('./request');

router.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

router.get('/:platform/:nickname', request);

module.exports = router;
