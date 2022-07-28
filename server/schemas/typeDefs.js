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
    rating: Rating
    category: Category
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
    thumbsUp:number
    thumbsDown: number
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
    checkout(products: [ID]!): Checkout
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(items: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;