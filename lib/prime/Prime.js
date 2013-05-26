var Prime,
    Server = require('./Server.js'),
    Timer = require('./Timer.js');

module.exports = Prime = function() {};

Prime.prototype.timer;
Prime.prototype.server;

Prime.prototype.getTimer = function() {
    return this.timer;
};

Prime.prototype.setTimer = function(timer) {
    if(!(timer instanceof Timer)) {
        throw "The timer object must be an instance of the prime Timer"
    }
    this.timer = timer;
    return this;
};

Prime.prototype.run = function() {
    this.server.create(this);
};

Prime.prototype.setServer = function(server) {
    if(!(server instanceof Server)) {
        throw "The server object must be an instance of the prime Server"
    }
    this.server = server;
    return this;
};

Prime.prototype.getServer = function() {
    return this.server;
};


