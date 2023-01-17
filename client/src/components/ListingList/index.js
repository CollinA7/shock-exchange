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
              <Card>
                <Card.Body>
                  <Card.Title>{listing.listingTitle}</Card.Title>
                  <Card.Text>
                    <Link to={`/listing/${listing._id}`}>
                      {/* Add the styling for the listing title */}
                      <p className="listing-link">{listing.listingText}</p>
                    </Link>
                  </Card.Text>
                  For sale by:{''}
                  <Link
                    to={`/profile/${listing.username}`}
                    style={{ fontWeight: 500 }}
                    className=""
                  >
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
