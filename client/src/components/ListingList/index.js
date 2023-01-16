import React from 'react';
import Card from 'react-bootstrap/Card';

const ListingList = ({ listings, title }) => {
  if (!listings.length) {
    return <h3>No listings in this area</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {listings &&
        listings.map((listing) => (
          <div key={listing._id}>
            <Card>
              <Card.Body>
                <Card.Title>{listing.listingTitle}</Card.Title>
                <Card.Text>{listing.listingText}</Card.Text>
                <span>For sale by {listing.username}</span>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default ListingList;
