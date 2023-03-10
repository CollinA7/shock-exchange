const { User, Listing } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    listings: async (parent, { listingTitle }) => {
      const params = listingTitle ? { listingTitle } : {};
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
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('listings');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addListing: async (parent, args, context) => {
      if (context.user) {
        const listing = await Listing.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { listings: listing._id } },
          { new: true }
        );

        return listing;
      }

      throw new AuthenticationError('You need to be logged in');
    },
  },
};

module.exports = resolvers;
