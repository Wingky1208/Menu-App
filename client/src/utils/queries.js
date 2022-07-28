import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query getItems($category: ID) {
    items(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
      rating{
        thumbsUp
        thumbsDown
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($items: [ID]!) {
    checkout(items: $items) {
      session
    }
  }
`;

export const QUERY_ALL_ITEMS = gql`
  {
    items {
      _id
      name
      description
      price
    
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        items {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;
