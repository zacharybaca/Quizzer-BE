const express = require("express");
const router = express.Router();

// test
router.get("/", (req, res) => {
  res.status(200).json("Quizzer: Profile Route API is running");
});

module.exports = router;
