const express = require('express');
const Cities = require('../models/cities');

const router = express.Router();

// ROUTES

// GET method. Use Cities model and retrieve list of cities as JSON
router.get('/', (req, res) => {
  Cities.retrieveAll((err, cities) => {
    if (err)
      return res.json(err);
    return res.json(cities);
  });
});

// capture city variable
// if error return as json data to frontend
router.post('/', (req, res) => {
  const city = req.body.city;

  Cities.insert(city, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;