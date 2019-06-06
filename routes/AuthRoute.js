const express = require("express");
const router = express.Router();
const passport = require("passport");

// google OAuth
router.post(
  "/google",
  passport.authenticate("googleToken", {
    session: false
  })
);

module.exports = router;
