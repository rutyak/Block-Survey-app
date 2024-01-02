const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    title: String,
    desc: String,
    questions: []
});

let forms = mongoose.model('forms', formSchema);

module.exports = {forms}