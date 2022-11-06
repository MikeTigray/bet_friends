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
    betCreatedBy: User
  }

  type Query {
    getAllUsers: [User]
    getSingleUser(userId: ID!): User
    getAllBets: [Bet]
    getSingleBet(betId: ID!): Bet
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
    removeBet(betId: ID!): Bet
  }
`;

module.exports = typeDefs;
