const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const port = 5000;
app.use(express.json());  // convert data in to json object
app.use(cors()); // allow to access data or add data
const videoSurvey = require('./routes/videoSurvey')
const formSurvey = require('./routes/formSurvey')
const imageSurvey = require('./routes/imageSurvey')
const videoFetch = require('./routes/videoFetch')
const formFetch = require('./routes/formFetch')
const imageFetch = require('./routes/imageFetch')
const formAnswers = require('./routes/formAnswers');
const imageAnswers = require('./routes/imageAnswers');
const videoAnswers = require('./routes/videoAnswers');
require('dotenv').config({path:'./.env'})

mongoose.connect('mongodb://localhost:27017/Surveys')
 
const connection = mongoose.connection;
 
connection.on("connected", () => {
    console.log("Connection established successfully!!")
})
 

app.use(videoSurvey); //middleware it executes one by one
app.use(formSurvey);
app.use(imageSurvey);
app.use(videoFetch); // fetching
app.use(formFetch);
app.use(imageFetch);
app.use(formAnswers);
app.use(videoAnswers);
app.use(imageAnswers);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})