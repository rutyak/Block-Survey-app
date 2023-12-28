const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/Survey',{useUnifiedTopology: true});


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})