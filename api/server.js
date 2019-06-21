const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./queries");
const passport = require("passport");
const passportStrats = require("../passport");

const stripe = require("../routes/stripe");

const knex = require("knex");
const knexConfig = require("../knexfile.js");
const test = knex(knexConfig.development);

//routes
const userRouter = require("../routes/UserRoute");
const quizRouter = require("../routes/QuizRoute");
const profileRouter = require("../routes/ProfileRoute");
const authRouter = require("../routes/AuthRoute");
const questionRouter = require("../routes/QuestionRoute");
const folderRouter = require("../routes/folderRoute");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(passport.initialize());
server.use(passport.session());

// sanity check
server.get("/", (req, res) => {
  res.status(200).json({ message: "Quizzer API is running" });
});

server.use("/api/users", userRouter);
server.use("/api/quiz", quizRouter);
server.use("/api/profile", profileRouter);
server.use("/api/auth", authRouter);
server.use("/api/stripe", stripe);
server.use("/api/quest", questionRouter);
server.use("/api/folder", folderRouter);

// Test Endpoints here:
server.get("/api/test", async (req, res) => {
  try {
    const projects = await test("main");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the quizzes from the database.",
      error
    });
  }
});

server.post("/api/test", async (req, res) => {
  if (!req.body.entry || !req.body.entry2) {
    return res.status(400).json({
      message: "Please include a entry, entry2,and try again."
    });
  }
  try {
    const project = await test("main").insert(req.body);
    if (project) {
      res.status(200).json({ message: "Quizz created successfully.", project });
    } else {
      res
        .status(404)
        .json({ message: "The qyizz could not be added to the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error adding the quizz to the database.",
      error
    });
  }
});

module.exports = server;
