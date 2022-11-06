const jwt = require("jsonwebtoken");

const secret = "tigraywillprevail";
const expiration = "2h";

module.exports = {
  authMiddeware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    console.log("token", token);

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ _id, username }) {
    const payload = { _id, username };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
