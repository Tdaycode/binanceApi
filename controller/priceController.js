const express = require('express');

const priceController = (app)=>{
    const axios = require('axios');
const {API} = process.env;

app.get('/api/', (req, res)=>{
    axios.get(API)
    .then((response) => {

        res.send(response.data)





    //   console.log(response.data);
    //   console.log(response.status);
    //   console.log(response.statusText);
    //   console.log(response.headers);
    //   console.log(response.config);
    });


})



}

module.exports = priceController;