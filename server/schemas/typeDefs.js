const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listing {
    _id: ID
    listingText: String
    createdAt: String
    username: String
  }

  type Query {
    listing: [Listing]
  }
`;

module.exports = typeDefs;
