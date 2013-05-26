var Server,
    HashMap = require('../util/HashMap.js'),
    Player = require('./Player.js'),
    Game = require('./Game.js'),
    Lobby = require('./Lobby.js'),
    EventEmitter = require('events').EventEmitter;

module.exports = Server = function() {
    EventEmitter.call(this);
    this.players = new HashMap();
    this.games = new HashMap();
};

Server.prototype = Object.create(EventEmitter.prototype);

Server.prototype.prime;
Server.prototype.io;
Server.prototype.lobby;

Server.prototype.initLobby = function() {
    this.lobby = new Lobby(this);
    
    this.lobby.on('createPlayer', this.createPlayer);
    this.lobby.on('createGame', this.createGame);
    this.lobby.on('listGames', this.listGames);
    
    this.lobby.listen();
};

Server.prototype.getIo = function() {
    return this.io;  
};

Server.prototype.getLobby = function() {
    return this.lobby;
};

Server.prototype.createPlayer = function(name, callback) {
    name = name.trim();
    if(!name) {
        return callback(new Error('Enter your name'));
    }
    if(this.players.containsPair('name', name)) {
        return callback(new Error('Player with name '+name+' already exists'));
    }
    var player = new Player(name);
    this.players.put(player.getId(), player);
    
    this.emit('createPlayer', player);
    
    return player;
};

Server.prototype.createGame = function(playerId) {
    var game = new Game(),
        player = this.players.get(playerId);
        
    game.addPlayer(player);
    this.games.put(game.getId(), game);
    
    this.emit('createGame', player);
};

Server.prototype.listGames = function() {
    return this.players;
};

Server.prototype.create = function() {
    throw new Error('method create not implemented');
};