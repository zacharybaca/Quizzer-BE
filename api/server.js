const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// sanity check
server.get('/', (req, res) => {
    res.status(200).json('Quizzer API is running');
});

module.exports = server;