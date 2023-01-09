const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
  listingText: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {},
  username: {},
  image: {},
});
