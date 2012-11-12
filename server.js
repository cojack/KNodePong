var express = require('express'),
  io = require('socket.io'),
  app = express(),
  Timer = require('./app/Timer'),
  timer = new Timer(),
  games = {};
  
app.use(express.static('public'));
app.listen(8080);

io = io.listen(8081);