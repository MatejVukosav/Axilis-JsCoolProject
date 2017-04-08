'use script';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    favorites: {
        type: [Number]
    }
})

module.exports = mongoose.model('User', userSchema);