const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
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
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
