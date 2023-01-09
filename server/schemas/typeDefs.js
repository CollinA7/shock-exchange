const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listing {
    _id: ID
    listingText: String
    username: String
  }

  type Query {
    listing(listingText: String): [Listing]
  }
`;

module.exports = typeDefs;
