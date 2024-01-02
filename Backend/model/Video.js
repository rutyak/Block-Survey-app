const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    url: String
})

let videos = mongoose.model('videos',videoSchema);

module.exports = {videos}