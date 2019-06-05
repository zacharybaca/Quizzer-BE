const jwt = require("jwt-simple");
const axios = require("axios");

const jwtKey =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";

// quickly see what this file exports
module.exports = {
  authenticate
};

function authenticate(req, res, next) {
  const token = req.get("Authorization");
  axios(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`);
  next();
}
