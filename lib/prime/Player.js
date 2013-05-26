var Player,
    uuid = require('node-uuid');

module.exports = Player = function(name) {
    this.name = name;
    this.id = uuid.v4();
};

Player.prototype.socket;

Player.prototype.getId = function() {
    return this.id;
};

Player.prototype.getName = function() {
    return this.name;
};

Player.prototype.setSocket = function(socket) {
    this.socket = socket;
};