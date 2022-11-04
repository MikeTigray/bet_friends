const express = require("express");
const app = express();
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const PORT = process.env.PORT || 3001;
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use("/images", express.static(path.join(__dirname, "../client/images")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`Application is listening at PORT: ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startApolloServer(typeDefs, resolvers);
