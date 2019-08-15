const fetch = require('node-fetch');
const dotenv = require('dotenv');

// Load dotenv
dotenv.config();

// Passing The API Key In The Headers
const headers = { 'TRN-Api-Key': process.env.TRACKER_API_KEY };

const request = (req, res) => {
  const { platform, gamerName } = req.query;
  fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamerName}`, {
    headers,
  })
    .then((result) => result.json())
    .then((result) => res.status(200).render('result', { result }))
    .catch((err) => res.status(500).send(err));
};

module.exports = request;
