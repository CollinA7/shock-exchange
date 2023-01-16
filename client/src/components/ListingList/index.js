import React from 'react';

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
            <h4>{listing.listingTitle}</h4>
            <p>{listing.listingText}</p>
            <span>For sale by {listing.username}</span>
          </div>
        ))}
    </div>
  );
};

export default ListingList;
