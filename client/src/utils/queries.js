import { gql } from '@apollo/client';

export const QUERY_LISTINGS = gql`
  query listings($listingTitle: String) {
    listings(listingTitle: $listingTitle) {
      _id
      listingTitle
      listingText
      username
    }
  }
`;

export const QUERY_LISTING = gql`
  query listing($id: ID!) {
    listing(_id: $id) {
      _id
      listingTitle
      listingText
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      listings {
        _id
        listingTitle
        listingText
      }
    }
  }
`;

export const QUERY_ME = gql`
  query {
    me {
      username
      _id
      firstName
      lastName
    }
  }
`;
