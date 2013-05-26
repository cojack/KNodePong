var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    KNodePong = require('./server/KNodePong.js');

server.listen(process.env.PORT);

app.use(express.static('client'));

var pong = new KNodePong(io);
pong.start();