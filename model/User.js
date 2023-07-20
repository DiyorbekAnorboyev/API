const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Users = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

const users = mongoose.model('Users', Users)
module.exports = users