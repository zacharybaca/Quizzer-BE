const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//routes
const userRouter = require("../routes/UserRoute");
const quizRouter = require("../routes/QuizRoute");
const profileRouter = require("../routes/ProfileRoute");
const authRouter = require("../routes/AuthRoute");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// sanity check
server.get("/", (req, res) => {
  res.status(200).json("Quizzer API is running");
});

server.use("/api/users", userRouter);
server.use("/api/quiz", quizRouter);
server.use("/api/profile", profileRouter);
server.use("/api/auth", authRouter);

module.exports = server;
