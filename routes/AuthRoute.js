const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../model/TeacherModel");
const { authenticate } = require("../auth/authenticate");

router.post("/login", authenticate, async (req, res) => {
  console.log(req.body.Zi.access_token);
  try {
    const { email, name } = req.body.profileObj;

    const user = {
      email,
      name
    };

    console.log(user);

    const addUser = await db.add(user);
    console.log(addUser);
    res.status(201).json(addUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
