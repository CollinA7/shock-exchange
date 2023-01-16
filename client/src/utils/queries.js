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
