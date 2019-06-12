const express = require('express');
const server = express();
const configureMiddleware = require('./middleware');
const zoos = require('./routes/zoos');

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to Zoos Database!</h2>`)
  });  

server.use("/api/zoos", zoos);

module.exports = server;