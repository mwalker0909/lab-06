'use strict'

// dependancies
const express = require('express');
const cors = require('cors');
require('dotenv').config();


// enviremont variables
const PORT = process.env.PORT;


// set up
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
    // console.log(response);
  }
  catch(error) {
      console.error(error);
  }
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
// models

//******LOCATION CONSTRUCTOR FUNCTION HERE*******. 
function Location(query, geoData) {
  this.search_query = query;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}




//helpers

function searchLatLong(location) {
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
