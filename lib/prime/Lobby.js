var Lobby,
    EventEmitter = require('events').EventEmitter;

module.exports = Lobby = function(server) {
    EventEmitter.call(this);
    this.server = server;
};

Lobby.prototype = Object.create(EventEmitter.prototype);

Lobby.prototype.listen = function() {
    var me = this;
    this.server.getIo().of('/lobby').on('connection', function(socket) {
        
        socket.broadcast.emit('user connected');
        
        socket.on('createPlayer', function(name, callback) {
            me.emit('createPlayer', name, callback);
            try {
                var player = me.server.createPlayer(name);
                player.setSocket(socket);
                callback(player);
            } catch(e) {
                callback(e);
            }
        });
        
        socket.on('createGame', function(playerId, callback) {
            try {
                var game = me.server.createGame(playerId);
                callback(game);
            } catch(e) {
                callback(e);
            }
        });
        
        socket.on('joinGame', function(gameId, callback) {
            try {
                me.server.joinGame(gameId);
                callback(true);
            } catch(e) {
                callback(e);
            }
        });
        
        socket.on('listGames', function(callback) {
            try {
                var lists = me.server.listGames();
                callback(lists);
            } catch(e) {
                callback(e);
            }
        });
        
        socket.on('disconnect', function () { 
            socket.broadcast.emit('user disconnected');
            // @TODO remove player from list
        });
    });   
};