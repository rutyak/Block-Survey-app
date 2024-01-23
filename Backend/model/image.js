const mongoose = require('mongoose')

const imgSchema = new mongoose.Schema({
    type: String,
    title: String,
    desc: String,
    imageFile: [String],
    stage: String,
    status: String
});

let images = mongoose.model('images',imgSchema);

module.exports = {images}