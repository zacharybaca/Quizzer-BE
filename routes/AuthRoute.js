const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../model/TeacherModel");

router.post("/login", async (req, res) => {
  // console.log(req.body.Zi.access_token);
  // console.log(req.body.profileObj);
  try {
    // const { email, name } = req.body.profileObj;
    //
    // const user = {
    //   email,
    //   name
    // };
    //
    // console.log(user);

    const addUser = await db.add(req.body);
    console.log(addUser);
    res.status(201).json(addUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
