var KNodePong,
    Prime = require('../lib/prime/Prime.js'),
    PongServer = require('./PongServer.js'),
    PongTimer = require('./PongTimer.js');

module.exports = KNodePong = function(io) {
    this.prime = new Prime();
    this.server = new PongServer(io);
    this.timer = new PongTimer();
};

KNodePong.prototype.start = function() {
    try {
        this.prime.setServer(this.server);
        this.prime.setTimer(this.timer);
        
        this.prime.run();
    } catch (err) {
        console.log(err);
    }
}