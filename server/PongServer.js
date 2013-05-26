var PongServer,
    Server = require('../lib/prime/Server');

module.exports = PongServer = function(io) {
    Server.call(this);
    this.io = io;
};

PongServer.prototype = Object.create(Server.prototype);

PongServer.prototype.prime;

PongServer.prototype.create = function(prime) {
    this.prime = prime;
    this.initLobby();
};