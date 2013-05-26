var PongTimer,
    Timer = require('../lib/prime/Timer.js');

module.exports = PongTimer = function() {
    Timer.call(this);
};

PongTimer.prototype = Object.create(Timer.prototype);