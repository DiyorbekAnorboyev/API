const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Phone = new Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    battery: {
        type: String,
    },
    screen_size: {
        type: String,
        required: true,
    },
    touchscreen: {
        type: String,
        required: true,
    },
    processor: {
        type: String,
        required: true,
    },
    ram: {
        type: String,
        required: true,
    },
    storage: {
        type: String,
        required: true,
    },
    rear_camera: {
        type: String,
        required: true,
    },
    front_camera: {
        type: String,
        required: true,
    },
    system: {
        type: String,
        required: true,
    },
    sim: {
        type: String,
        required: true,
    },

})

const restaurants = mongoose.model('Phone', Phone)
module.exports = restaurants