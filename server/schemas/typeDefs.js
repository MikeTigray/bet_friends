const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    credit: Int
  }
  type Bet {
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
  }
`;

module.exports = typeDefs;
