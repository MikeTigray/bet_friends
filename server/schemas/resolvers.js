const { User, Bet } = require("../models");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find({});
      return users;
    },
  },
  Mutation: {
    createUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      return user;
    },
  },
};

module.exports = resolvers;
