const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true, minLength: 5 },
  credit: { type: Number, default: 2000 },
});

const User = model("User", userSchema);

module.exports = User;
