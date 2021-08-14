const express = require('express');
require('dotenv').config();
const {PORT} = process.env;
const getPrice = require('./controller/priceController')
const app = express();

app.use(express.json({extended: false}));
 

const port = process.env.PORT || PORT




/*
* Using the current price module
*/

getPrice(app);


/*
* Creating server connection
*/


if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
   

