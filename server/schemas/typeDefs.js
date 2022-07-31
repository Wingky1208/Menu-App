const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Item {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
    thumbsUp: Float
    thumbsDown: Float
  }
  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
  type Rating {
    thumbsUp: Float
    thumbsDown: Float
    item: Item
  }
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    items(category: ID, name: String): [Item]
    item(_id: ID!): Item
    user: User
    order(_id: ID!): Order
    rating(_id: ID!): Rating
    checkout(products: [ID]!): Checkout
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(items: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateItem(_id: ID thumbsUp: Float, thumbsDown: Float): Item
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;