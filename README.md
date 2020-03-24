# PERN Full Stack Database

* PostgreSQL Express React Node (PERN) full-stack app, integrates React frontend with Node.js backend. Currently shows weather data from [OpenWeather API](https://openweathermap.org/api). Tutorial code (see 'Inspiration' below)

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

### Backend

* PostgreSQL needs to be installed and running - I started it from my Windows 10 PostgreSQL 12 dropdown option 'SQL shell (psql)'
* Postman used to test the backend before frontend was available

### Frontend

* React frontend includes a city selection user input field and a dropdown list of cities. Select a city to see the weather.
* [JavaScript XML (JSX)](https://reactjs.org/docs/introducing-jsx.html) used to write HTML elements in Javascript

## Screenshots

![Backend screenshot](./img/postgresql.png)
![Frontend screenshot](./img/weather.png)
![Frontend screenshot](./img/heroku.png)

## Technologies - Backend

* [PostgreSQL v12.2](https://www.postgresql.org/)
* [PostgreSQL Installer for Windows](https://www.postgresqltutorial.com/install-postgresql/)
* [Express.js middleware v4.17.1](https://expressjs.com/)
* [Node.js v12.4.0](https://nodejs.org/es/)
* [Nodemon](https://www.npmjs.com/package/nodemon) npm module so backend server will automatically restart after code changes
* [OpenWeather API](https://openweathermap.org/api) for weather data

## Technologies - Frontend

* [React framework v16.13.1](https://reactjs.org/)
* [Create React App](https://github.com/facebookincubator/create-react-app) used to bootstrap frontend React app
* [Bootstrap v4.4.1](https://getbootstrap.com/) component library

## Setup - Backend

* Change to `/server` directory
* Install dependencies using `npm i`
* Install [nodemon v2.0.2](https://www.npmjs.com/package/nodemon) globally if you don't already have it
* Install [PostgreSQL](https://www.postgresql.org/) & run it (requires the password you created during installation)
* Add postgresql database & weather API access credentials to .env file
* Run `nodemon server` for a dev server
* `http://localhost:5000/` can be accessed for CRUD operations such as POST, GET, PUT, DELETE etc. using Postman

## Setup - Frontend

* Change to `/client` directory
* Install dependencies using `npm i`. (I have not tried this method and cannot be sure it will work)
* Alternatively - and better - bootstrap a new React project using `npx create-react-app my-app`
* Run `npm start`. Frontend will open at `http://localhost:3000/`

## Code Examples - Backend

* static method to add city to database list of cities.

```javascript
  // callback function - if error return it to callback. If no error thhen return rows (empty set)
  static insert (city, callback) {
    db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
```

## Code Examples - Frontend

* method to add a city

```javascript
// fetch an object that has a city property
  // after getting city list clear input field
  handleAddCity = () => {
    fetch('/api/cities', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city: this.state.newCityName })
    })
    .then(res => res.json())
    .then(res => {
      this.getCityList();
      this.setState({ newCityName: '' });
    });
  };
```

## Features - Backend

* All data stored in PostgreSQL database that can also be viewed and changed from the PostgreSQL shell (psql)
* [Static methods used](https://javascript.info/static-properties-methods)

## Features - Frontend

* React app created from the command prompt using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
* Uses the [Bootstrap basic table](https://www.w3schools.com/bootstrap/bootstrap_tables.asp) to list todos
* [Bootstrap 4 Modal](https://www.w3schools.com/bootstrap4/bootstrap_modal.asp) dialog box

## Status & To-Do List

* Status: Working front and back ends.
* To-Do: Add commenting. Add functionality.

## Inspiration/General Tools

* [Full Stack React App Tutorial (Beginners) | Part #1 – Introduction](https://www.youtube.com/watch?v=Z4jCvpSROp8&t=1s)
* [Full Stack React App Tutorial (Beginners) | Part #2 – Back End](https://www.youtube.com/watch?v=Bz0oxKrOcNk)
* [Full Stack React App Tutorial (Beginners) | Part #3 – Front End](https://www.youtube.com/watch?v=0RtSiP5Dnn8)
* [Full Stack React App Tutorial (Beginners) | Part #4 – Deployment](https://www.youtube.com/watch?v=0eGA1zYvyeU)
* [Full Stack React App Tutorial (Beginners) | Part #5 – Best Practices (Bonus)](https://www.youtube.com/watch?v=uajUz8rswyM)
* [React documentation](https://reactjs.org/docs/getting-started.html)
* [Enable Emmet support for JSX in Visual Studio Code | React](https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c)
* [js-beautify for VS Code](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
