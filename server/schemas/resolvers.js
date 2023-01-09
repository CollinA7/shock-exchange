const { User, Listing } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    listing: async (parent, { listingText }) => {
      const params = listingText ? { listingText } : {};
      return Listing.find(params).sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
