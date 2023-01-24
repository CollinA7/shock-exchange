import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function SingleUser() {
  const { username: userData } = useParams();

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { userData },
  });

  const user = data?.user || {};

  console.log(user);
  if (loading) {
    return <div>...Loading...</div>;
  }
  if (error) {
    return `Error ${error}`;
  }

  return <div>{user.username}</div>;
}

export default SingleUser;
