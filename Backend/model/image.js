const mongoose = require('mongoose')

const imgSchema = new mongoose.Schema({
    title: String,
    desc: String,
    imgUrl: String
});

let images = mongoose.model('images',imgSchema);

module.exports = {images}