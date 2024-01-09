const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    videoUrl: String,
    type: String
})

let videos = mongoose.model('videos',videoSchema);

module.exports = {videos}