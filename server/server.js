const app = require("express")();
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const PORT = process.env.PORT || 3001;
const db = require("./config/connection");
