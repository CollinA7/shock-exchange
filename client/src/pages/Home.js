import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LISTINGS } from '../utils/queries';

//              Component imports
import ListingList from '../components/ListingList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];

  return (
    <div className="container">
      <div className="col-4 mb-3">
        {loading ? (
          <div> ...Loading...</div>
        ) : (
          <ListingList listings={listings} title="Here are some listings:" />
        )}
      </div>
    </div>
  );
};

export default Home;
