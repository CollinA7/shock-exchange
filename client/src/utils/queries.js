import { gql } from '@apollo/client';

export const QUERY_LISTINGS = gql`
  query listings($listingText: String) {
    listings(listingText: $listingText) {
      _id
      listingText
      username
    }
  }
`;
