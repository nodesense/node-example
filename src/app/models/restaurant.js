const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurant = new Schema({
    name:  String,
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
    city: String,
    cuisine: [String],
    budget: Number,
    rating: Number,
    menu: [{ title: String, price: Number}]
  });

const Restaurant = mongoose.model('Restaurant', restaurant, 'restaurants');

export default Restaurant;