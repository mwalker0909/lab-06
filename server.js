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


//entreis points

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));







// handlers
// models
//helpers


