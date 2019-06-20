const jwt = require("jwt-simple");
const axios = require("axios");

const jwtKey =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";

// quickly see what this file exports
module.exports = {
  authenticate
};

async function authenticate(req, res, next) {
  // verify token
  try {
    const token = req.get("Authorization");
    const auth = await axios(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
    );
    next();
  } catch (err) {
    res.status(401).json({ err, msg: "token not valid" });
  }
}
