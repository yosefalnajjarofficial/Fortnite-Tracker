const fetch = require('node-fetch');
const dotenv = require('dotenv');

// Load dotenv
dotenv.config();

// Passing The API Key In The Headers
const headers = { 'TRN-Api-Key': process.env.TRACKER_API_KEY };

const request = (req, res) => {
  const { platform, nickname } = req.params;
  fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${nickname}`, {
    headers,
  })
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => res.status(500).send(err));
};

module.exports = request;
