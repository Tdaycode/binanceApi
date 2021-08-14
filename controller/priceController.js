const express = require('express');

const priceController = (app)=>{
    const axios = require('axios');
const {API} = process.env;

app.get('/api/', (req, res)=>{
    axios.get(API)
    .then((response) => {
  

        res.send(response.data)





    });


})



}

module.exports = priceController;