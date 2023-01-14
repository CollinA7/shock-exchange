const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listing {
    _id: ID
    listingText: String
    user(username: String!): User
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
    listings(listingText: String): [Listing]
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
    addListing(listingText: String!): Listing
  }
`;

module.exports = typeDefs;
