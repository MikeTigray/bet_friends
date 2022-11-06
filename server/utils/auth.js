const jwt = require("jsonwebtoken");

const secret = "mysecret";
const expiration = "2h";

module.exports = {
  authMiddeware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
  },
  signToken: function ({}) {
    const payload = {};

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
