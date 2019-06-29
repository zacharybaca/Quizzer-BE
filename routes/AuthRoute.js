const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../model/UserModel");
const Teacherdb = require("../model/TeacherModel");
const Studentdb = require("../model/StudentModel");
const { authenticate, authenticateAndroid } = require("../auth/authenticate");

//teacher login
router.post("/teacher/login", authenticate, async (req, res) => {
  try {
    const { email, name } = req.body.profileObj;
    const role = "Teacher";
    const maxNumber = 100000;
    let access_code = Math.floor(Math.random() * maxNumber + 1);

    const user = {
      email,
      name,
      role,
      access_code
    };

    const ifUserExist = await Teacherdb.findBy({ email });

    if (ifUserExist.length > 0) {
      console.log("user exists");
      return res.status(200).json(ifUserExist);
    }

    const addUser = await Teacherdb.add(user);

    return res.status(201).json(addUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//student login
router.post("/student/login", authenticate, async (req, res) => {
  try {
    const { email, name } = req.body.profileObj;
    const role = "Student";

    const user = {
      email,
      name,
      role
    };

    const ifUserExist = await Studentdb.findBy(user);

    if (ifUserExist.length > 0) {
      console.log("user exists");
      return res.status(200).json(ifUserExist);
    }

    const addUser = await Studentdb.add(user);

    return res.status(201).json(addUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//student login for andriod
router.post("/student/login/android", authenticateAndroid, async (req, res) => {
  try {
    const { email, name } = req.body.profileObj;
    const role = "Student";

    const user = {
      email,
      name,
      role
    };

    console.log(user);
    const ifUserExist = await Studentdb.findBy(user);
    console.log(ifUserExist);

    if (ifUserExist.length > 0) {
      console.log("user exists");
      return res.status(200).json(ifUserExist);
    }

    const addUser = await Studentdb.add(user);

    return res.status(201).json(addUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
