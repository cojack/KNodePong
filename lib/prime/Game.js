var Game;

module.exports = Game = function(io) {
    this.io = io;
    Game.prototype.players = [];    
};

Game.prototype.id;
Game.prototype.world;

Game.prototype.start = function() {
};

Game.prototype.addPlayer = function(player) {
    this.players.push(player);
}