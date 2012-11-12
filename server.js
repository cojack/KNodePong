var express = require('express'),
  io = require('socket.io'),
  app = express(),
  lobby = new Lobby(),
  Timer = require('./app/Timer'),
  Communication = require('./app/Communication'),
  timer = new Timer(),
  games = {};
  
