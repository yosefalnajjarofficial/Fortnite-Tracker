const express = require('express');

const router = express.Router();

const request = require('./request');
const home = require('./home');

router.get('/', home);

router.get('/profile', request);

module.exports = router;
