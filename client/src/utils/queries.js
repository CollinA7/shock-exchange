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
