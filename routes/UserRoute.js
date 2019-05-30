const express = require("express");
const router = express.Router();

// test
router.get("/", (req, res) => {
  res.status(200).json("Quizzer: Auth user API is running");
});

module.exports = router;
