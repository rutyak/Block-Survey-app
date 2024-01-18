const mongoose = require('mongoose')

const imageAnsSchema = mongoose.Schema({
    name: String,
    title: String,
    answer: [{
        img1: String,
        img2: String
    }]
})

let imageAns = mongoose.model("imageAns",imageAnsSchema);

module.exports = {imageAns}