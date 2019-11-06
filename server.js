'use strict'

// dependancies
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const superagent = require('superagent')

// enviremont variables
const PORT = process.env.PORT;


// Application setup
const app = express();
app.use(cors());



//routes
app.get('/', (request,response) => {
  response.send('Home Page!');
});

app.get('/location', (request,response) => {
  try {
    const query = request.query.data;
    response.send(searchLatLong(query)); 
    
  }
  catch(error) {
      console.error(error);
  }

  //weather route
  app.get('/weather', (request, response) => {
    try {
      const weatherData = request.query.data;
      response.send(weatherData(query));
    }
    catch(error) {
      console.error(error);
      let message = errorMessage();
      response.status(message.status).send(message.responseText);
    }
  });
  //TODO envoke function that converts search query to lat/long. 

});

// app.get('/location', (request,response) => {
//   try {
//     const geoData = require('./data/geo.json');
//     const city = request.query.data;
//     const locationData = new Location(city,geoData);
//     response.send(locationData);
//   }
//   catch(error) {
//     errorHandler('So sorry, something went wrong.', request, response);
//   }
// });



//entries points
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));


// handlers

function handleLocation(request, response) {






const = url // long url that represents google api



superagent.get(url)
  .then( data => {
    const geoData = data.body
    const location = new Location(request.query.data, geoData);
    response.send(location);
  })
  .catch( error => {
    console.error(error);
    response.status(500).send('Status: 500. Sorry, there is something not quite right');
  });
}

// CHECK OUT VIDEO  FOR THIS
function handleWeather(request, response) {
  try {
    const darkskyData = require('./data/darksky.json');
    const weatherSummaries = [];
    darkskyData.daily.data.forEach( day => {
      weatherSummaries.push(new Weather(day));
    });

  }
}
  catch {
    
    errorHandler('so sorry, that is wrong');
  }

  const = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`
  superagent.get(url)
  .then( data => {
    const weatherSummaries = data.body.daily.data.map(day => {
      return new Weather(day);
    });
    response.status(200).json(weatherSummaries);
  })
  .catch( () => {
      errorHandler('So sorry', request, response);
  });







// models



// ----------------------------------------------
//******LOCATION CONSTRUCTOR FUNCTION HERE*******
//-----------------------------------------------

function Location(query, geoData) {
  this.search_query = query;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}

function Weather(query, weatherData) {
  this.forcast = day.summery
  this.time = new Date(day.time * 1000).toString().slice(0,15);

}



//helpers

function searchLatLong(location) {
  const geoData = require('./data/geo.json');
  const locationData = new Location(location,geoData);
  console.log(locationData.latitude, locationData.longitude);
  return locationData;
}

function weather(location) {
  const geoData = require('./data/geo.json');
  const locationData = new Location(location,geoData);
  console.log(locationData.latitude, locationData.longitude);
  return locationData;
}


//****** LOCATION HELPER FUNCTION HERE.  ********/


// take in response data. 
// new a location object using the data. 
// catch any errors. 
// 





