const express = require('express');

const priceController = (app)=>{
    const axios = require('axios');
const {API} = process.env;



/*
* creating a get request
*/
app.get('/api/price', (req, res)=>{
    axios.get(API)
    .then((response) => {
  

        res.send(response.data)





    });


})



}

module.exports = priceController;