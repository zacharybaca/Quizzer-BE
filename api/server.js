const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// *** Default Endpoint ***
server.get('/', (req, res) => {
    res.status(200).json({message: 'Server is UP and Working!' });
})

module.exports = server;
