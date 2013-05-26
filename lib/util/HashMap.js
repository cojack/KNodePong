var HashMap,
    Map = require('./Map.js'),
    AbstractMap = require("./AbstractMap.js");

module.exports = HashMap = function(map) {
    AbstractMap.call(this);
    
    this.putAll(map);
};

HashMap.prototype = Object.create(AbstractMap.prototype);

HashMap.prototype.clear = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key)) {
            delete this[key];
        }
    }
    return this;
};

HashMap.prototype.clone = function() {
    return new HashMap(this);
};

HashMap.prototype.containsKey = function(key) {
    return this.hasOwnProperty(key);
};

HashMap.prototype.containsValue = function(val) {
    for(var key in this) {
        if(this.hasOwnProperty(key) && this[key] === val) {
            return true;
        }
    }
    return false;
};

HashMap.prototype.containsPair = function(valKey, valValue) {
    for(var key in this)  {
        if(this.hasOwnProperty(key) && this[key][valKey] && this[key][valKey] === valValue) {
            return true;
      }
  }
  return false;
};

HashMap.prototype.entrySet = function() {
    
};

HashMap.prototype.get = function(key) {
    return this[key];
};

HashMap.prototype.isEmpty = function() {
    return this.size() === 0;
};

HashMap.prototype.keySet = function() {
    return this.keys();
};

HashMap.prototype.put = function(key, val) {
    this[key] = val;
    return this;
};

HashMap.prototype.putAll = function(map) {
    if(map instanceof Map && !map.isEmpty()) {
        for(var key in map) {
            if(map.containsKey(key)) {
                this.put(key, map.get(key));
            }
        }
    }
};

HashMap.prototype.remove = function(key) {
    if(this.hasOwnProperty(key)) {
        delete this[key];
    }
    return this;
};

HashMap.prototype.size = function() {
    var size = 0;
    for(var property in this) {
        if(this.hasOwnProperty(property)) {
            ++size;
        }
    }
    return size;
};

HashMap.prototype.values = function() {
    var values = [];
    for(var key in this) {
        if(this.hasOwnProperty(key)) {
            values.push(this[key]);
        }
    }
    return values;
};