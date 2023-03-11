import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function SingleUser() {
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

  const listings = user.listings;

  const usersListings = listings.map((listing) => (
    <Col xs={4} key={listing._id}>
      <Card style={{ width: '300px', height: '170px' }}>
        <Card.Body>
          <Card.Title>
            {' '}
            <Link to={`/listing/${listing._id}`}>
              <h4 className="listing-link">{listing.listingTitle}</h4>
            </Link>
          </Card.Title>
          <Card.Text>{listing.listingText}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
      <h2>{user.username}</h2>
      <div>{usersListings}</div>
    </div>
  );
}

export default SingleUser;
