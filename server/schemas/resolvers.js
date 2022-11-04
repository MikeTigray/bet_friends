const { User, Bet } = require("../models");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find({});
      return users;
    },
    getSingleUser: async (parent, { userId }) => {
      const user = await User.findById({ _id: userId });
      return user;
    },
    getAllBets: async () => {
      const bets = await Bet.find({}).populate("betCreatedBy");
      return bets;
    },
    getSingleBet: async (parent, { betId }) => {
      const bet = await Bet.findById({ _id: betId }).populate("betCreatedBy");
      return bet;
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
      const bet = await Bet.create(args);
      return bet;
    },
    removeBet: async (parent, { _id }) => {
      await Bet.findByIdAndDelete({ _id: _id });
    },
  },
};

module.exports = resolvers;
