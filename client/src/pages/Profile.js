import { useQuery } from '@apollo/client';
import React from 'react';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';

function Profile() {
  const { id: userData } = useParams();
  const { loading, error, data } = useQuery(QUERY_ME, {
    variables: { id: userData },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>...Loading...</div>;
  }
  if (error) {
    console.log(JSON.stringify(error, null, 2));

    return `Error ${error}`;
  }

  const loggedInUser = user.me;

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>{loggedInUser}</h2>
      <Image src="./images/stock-user.jpg" className="rounded" alt="prof-pic" />
      <form action="/profile/photo" encType="multipart/form-data" method="post">
        <div className="form-group">
          <input type="file" className="form-control-file" name="avatar" />
        </div>
        <button type="submit" onSubmit={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
