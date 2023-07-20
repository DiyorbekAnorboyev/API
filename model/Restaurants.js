const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Restaurants = new Schema({
    restaurant_name: {
        type: String,
        required: true,
    },
    restaurant_location: {
        type: String,
        required: true,
    },
    restaurant_phone: {
        type: String,
        required: true,
    },
    restaurant_time: {
        type: String,
        required: true,
    }

})

const restaurants = mongoose.model('Restaurants', Restaurants)
module.exports = restaurants