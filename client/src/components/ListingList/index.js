import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
              <Card>
                <Card.Body>
                  <Card.Title>{listing.listingTitle}</Card.Title>
                  <Card.Text>{listing.listingText}</Card.Text>
                  <span>For sale by {listing.username}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ListingList;
