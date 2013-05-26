var Timer;

module.exports = Timer = function(delay, repeat) {
    this.delay = delay;
    this.repeat = repeat;
    this.acc = 0;
};

Timer.prototype.delay;
Timer.prototype.repeat;
Timer.prototype.acc;
Timer.prototype.done;
Timer.prototype.stopped;

Timer.prototype.update = function(delta) {
    if (!this.done && !this.stopped) {
        this.acc += delta;

        if (this.acc >= this.delay) {
            this.acc -= this.delay;

            if (this.repeat) {
                this.reset();
            } else {
                this.done = true;
            }

            this.execute();
        }
    }
};

Timer.prototype.reset = function() {
    this.stopped = false;
    this.done = false;
    this.acc = 0;
};

Timer.prototype.isDone = function() {
    return this.done;
};

Timer.prototype.isRunning = function() {
    return !this.done && this.acc < this.delay && !this.stopped;
};

Timer.prototype.stop = function() {
    this.stopped = true;
};

Timer.prototype.setDelay = function(delay) {
    this.delay = delay;
};

Timer.prototype.execute = function() {};

Timer.prototype.getPercentageRemaining = function() {
    if (this.done)
        return 100;
    else if (this.stopped)
        return 0;
    else
        return 1 - (this.delay - this.acc) / this.delay;
};

Timer.prototype.getDelay = function() {
    return this.delay;
}