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

mongoose.connect('mongodb://localhost:27017/Surveys', {useUnifiedTopology: true}, {});

app.use(videoSurvey); //middleware it executes one by one
app.use(formSurvey);
app.use(imageSurvey);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})