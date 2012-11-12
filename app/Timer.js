var Timer;

module.exports = Timer = function() {
  this.callbacks = new Array();
};


Timer.prototype.register = function(name, func, interval) {
  this.callbacks.push({
    id: 0,
    name: name,
    func: func,
    interval: interval
  });
};


Timer.prototype.start = function() {
  for(var i in this.callbacks) {
    this.callbacks[i]['id'] = setInterval(this.callbacks[i]['func'], this.callbacks[i]['interval']);    
  }
};

Timer.prototype.stop = function(name) {
  clearInterval(this.callbacks[name]['id']);
};