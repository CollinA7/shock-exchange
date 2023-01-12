const { User, Listing } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    listings: async (parent, { listingText }) => {
      const params = listingText ? { listingText } : {};
      return Listing.find(params).sort({ createdAt: -1 });
    },
    listing: async (parent, { _id }) => {
      return Listing.findOne({ _id });
    },
    users: async () => {
      return User.find().select('-__v -password').populate('listings');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('listings');
    },
  },
};

module.exports = resolvers;
