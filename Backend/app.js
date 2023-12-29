const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const videoSurvey = require('./routes/videoSurvey')
const formSurvey = require('./routes/formSurvey')
const port = 5000;
app.use(express.json());  // convert data in to json object
app.use(cors()); // allow to access data or add data

mongoose.connect('mongodb://localhost:27017/Surveys', {useUnifiedTopology: true}, {});

app.use(videoSurvey); //middleware it executes one by one
app.use(formSurvey);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})