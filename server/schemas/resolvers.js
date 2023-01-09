const { User, Listing } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    listing: async () => {
      return Listing.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
