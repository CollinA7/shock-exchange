import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function SingleUser({ title }) {
  const { username: userData } = useParams();
  //  try to destructure incoming props for the array
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { username: userData },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>...Loading...</div>;
  }
  if (error) {
    console.log(JSON.stringify(error, null, 2));

    return `Error ${error}`;
  }
  console.log(user);
  const listings = user.listings;

  const usersListings = listings.map((listing) => (
    <div key={listing._id}>
      <div>{listing.listingTitle}</div>
      <p>{listing.listingText}</p>
    </div>
  ));

  return (
    <div>
      <p>{user.username}</p>
      <div>{usersListings}</div>
    </div>
  );
}

export default SingleUser;
