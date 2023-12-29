const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    title: String,
    desc: String,
    que: String,
    radioQue: String,
    checkboxQue: String
});

let forms = mongoose.model('forms', formSchema);

module.exports = {forms}