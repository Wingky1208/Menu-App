import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($items: [ID]!) {
    addOrder(items: $items) {
      purchaseDate
      items {
        _id
        name
        description
        price
      
        category {
          name
        }
        rating{
            thumbsUp
            thumbsDown
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }  
`;

export const UPDATE_ITEM = gql`
mutation updateItem($thumbsUp: Float, $thumbsDown: Float, $id: ID) {
  updateItem(thumbsUp: $thumbsUp, thumbsDown: $thumbsDown, _id: $id) {
    thumbsUp
    thumbsDown
  }
}
`;