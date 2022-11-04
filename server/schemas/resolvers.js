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
    updateUser: async (parent, args) => {
      const user = await User.findByIdAndUpdate(args._id, args, { new: true });

      return user;
    },
    createBet: async (parent, args) => {
      const bet = Bet(args);
      return bet;
    },
  },
};

module.exports = resolvers;
