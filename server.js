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
  //TODO envoke function that converts search query to lat/long. 

});


//entries points
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));


// handlers
// models

//******LOCATION CONSTRUCTOR FUNCTION HERE*******. 
function Location(query, data) {
  this.search_query = query;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}




//helpers



//****** LOCATION HELPER FUNCTION HERE.  ********/


// take in response data. 
// new a location object using the data. 
// catch any errors. 
// 
