import React from 'react';
import Button from 'react-bootstrap/Button';

const Account = () => {
  function accountHandle({}) {
    console.log('yes');
  }

  return (
    <>
      <ul>
        <li>
          <Button
            // onClick={accountHandle}
            id="account-details"
            value="account-details"
          >
            Account details
          </Button>
        </li>
        <li>
          <Button>Orders</Button>
        </li>
        <li>
          <Button>Selling</Button>
        </li>
      </ul>
    </>
  );
};

export default Account;
