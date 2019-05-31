const express = require("express");
const router = express.Router();
const db = require('../api/queries');

// test
router.get("/", (req, res) => {
  res.status(200).json("Quizzer: Auth user API is running");
});

router.get('api/users', db.getUsers)
router.get('api/users/:id', db.getUserById)
router.post('api/users', db.createUser)
router.put('api/users/:id', db.updateUser)
router.delete('api/users/:id', db.deleteUser)

module.exports = router;
