const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listing {
    _id: ID
    listingText: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    listings: [Listing]
  }

  type Query {
    users: [User]
    user(username: String!): User
    listings(listingText: String): [Listing]
    listing(_id: ID!): Listing
  }
`;

module.exports = typeDefs;
