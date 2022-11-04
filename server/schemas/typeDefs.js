const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    credit: Int
  }
  type Bet {
    _id: ID
    title: String
    description: String
    points: Int
    betDate: String
    betCreatedBy: ID
  }

  type Query {
    getAllUsers: [User]
    getAllBets: [Bet]
  }
  type Mutation {
    createUser(username: String!, password: String!): User
    updateUser(_id: ID, username: String, password: String, credit: Int): User
    createBet(
      title: String
      description: String
      points: Int
      betCreatedBy: ID
    ): Bet
    removeBet(_id: ID!): Bet
  }
`;

module.exports = typeDefs;
