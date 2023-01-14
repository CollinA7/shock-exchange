import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LISTINGS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];
  console.log(listings);

  return (
    <div className="container">
      <div className="col-4 mb-3"></div>
    </div>
  );
};

export default Home;
