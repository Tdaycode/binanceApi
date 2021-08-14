const express = require('express');
require('dotenv').config();
const {PORT} = process.env;
const getPrice = require('./controller/priceController')
const app = express();

app.use(express.json({extended: false}));


// app.get('/', (req, res)=> res.json({message: "welcome"}));

const port = process.env.PORT || PORT





getPrice(app);



app.listen(port, (err )=>{
    if (err){
        console.log(err);
    }else{
        console.log(`app running on port ${port}`)
    }
   
})
