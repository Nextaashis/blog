const mongoose = require('mongoose');

module.exports = mongoose.model('news', mongoose.Schema({
    title: String,
    image: String,
    newsbody:String
}))

