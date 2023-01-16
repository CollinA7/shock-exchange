const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listing {
    _id: ID
    listingTitle: String
    listingText: String
    username: String
  }

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    listings: [Listing]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    listings(listingTitle: String): [Listing]
    listing(_id: ID!): Listing
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      firstName: String!
      lastName: String!
      password: String!
    ): Auth
    addListing(
      listingTitle: String!
      listingText: String!
      username: String!
    ): Listing
  }
`;

module.exports = typeDefs;
