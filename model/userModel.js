const mongoose = require('mongoose');


module.exports = mongoose.model('newsuser', new mongoose.Schema({
        name: String,
        email: String,
        password: String,
        phone: Number
}))