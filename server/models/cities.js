const db = require('../database');

class Cities {
  static retrieveAll (callback) {
    db.query('SELECT city_name FROM cities', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  // add city to database list of cities. 
  // callback function - if error return it to callback. If no error thhen return rows (empty set)
  static insert (city, callback) {
    db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Cities;