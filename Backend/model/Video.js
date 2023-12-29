const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    name: String
})

let videos = mongoose.model('videos',videoSchema);

module.exports = {videos}