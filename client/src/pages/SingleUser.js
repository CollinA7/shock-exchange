import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function SingleUser() {
  const { username: userData } = useParams();

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

  return (
    <div>
      <p>{user.username}</p>
    </div>
  );
}

export default SingleUser;
