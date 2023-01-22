import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USERNAME } from '../utils/queries';

function SingleUser() {
  const { user: username } = useParams();

  const { loading, data } = useQuery(QUERY_USERNAME, {
    variables: { user: username },
  });
  console.log(data);
  const userData = data?.userame || {};
  console.log(userData);

  if (loading) {
    return <div>...Loading...</div>;
  }

  return <div>{userData} test</div>;
}

export default SingleUser;
