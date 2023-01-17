import React from 'react';
import Container from 'react-bootstrap/Container';
import { useQuery } from '@apollo/client';
import { QUERY_LISTINGS } from '../utils/queries';

//              Component imports
import ListingList from '../components/ListingList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];

  return (
    <Container>
      {loading ? (
        <div> ...Loading...</div>
      ) : (
        <ListingList listings={listings} title="Here are some listings:" />
      )}
    </Container>
  );
};

export default Home;
