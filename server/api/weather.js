const express = require('express');
const Weather = require('../models/weather');

const router = express.Router();

// get weather for a chosen city
router.get('/:city', (req, res) => {
  const city = req.params.city;

  Weather.retrieveByCity(city, (err, weather) => {
    if (err) 
      return res.json(err);
    return res.json(weather);
  });
});

module.exports = router;