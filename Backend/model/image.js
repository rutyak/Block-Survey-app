const mongoose = require('mongoose')

const imgSchema = new mongoose.Schema({
    type: String,
    title: String,
    desc: String,
    imageFile: [String]
});

let images = mongoose.model('images',imgSchema);

module.exports = {images}