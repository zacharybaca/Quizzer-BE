const express = require("express");
const router = express.Router();
const db = require('../api/queries');

// test
router.get("/", (req, res) => {
  res.status(200).json("Quizzer: Auth user API is running");
});

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

module.exports = router;
