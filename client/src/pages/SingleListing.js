import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_LISTING } from '../utils/queries';

function SingleListing() {
  const { id: listingId } = useParams();

  const { loading, data } = useQuery(QUERY_LISTING, {
    variables: { id: listingId },
  });

  const listing = data?.listing || {};

  if (loading) {
    return <div>...Loading...</div>;
  }
  return (
    <div>
      <h3>{listing.listingTitle}</h3>
    </div>
  );
}

export default SingleListing;
