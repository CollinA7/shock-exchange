import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      user {
        _id
        username
        firstName
        lastName
        email
      }
    }
  }
`;
