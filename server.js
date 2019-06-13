const express = require('express');
const server = express();
const configureMiddleware = require('./middleware');
const zoos = require('./routes/zoos-router');
const bears = require('./routes/bears-router');

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to Zoos Database!</h2>`)
  });  

server.use("/api/zoos", zoos);
server.use("/api/bears", bears);

module.exports = server;