import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ListingList = ({ listings, title }) => {
  if (!listings.length) {
    return <h3>No listings in this area</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      <Row>
        {listings &&
          listings.map((listing) => (
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
                  For sale by:{''}
                  <Link to={`/user/${listing.username}`} className="user-link">
                    {listing.username}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ListingList;
