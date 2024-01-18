const mongoose = require('mongoose')

const videoAnsSchema = mongoose.Schema({
    name: String,
    title: String,
    answer: [{
        start: String,
        end: String
    }],
    videoUrl: String,
    videoType: String
})

let videoAns = mongoose.model("videoAns",videoAnsSchema);

module.exports = {videoAns}