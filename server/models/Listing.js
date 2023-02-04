const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
  listingTitle: {
    type: String,
    require: true,
    trim: true,
  },
  listingText: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  images: {
    type: [],
  },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
