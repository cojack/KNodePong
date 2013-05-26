var AbstractMap,
    Map = require("./Map.js");

module.exports = AbstractMap = function() {
    Map.call(this);
};

AbstractMap.prototype = Object.create(Map.prototype);

AbstractMap.prototype.clear = function() {
    
};

AbstractMap.prototype.clone = function() {
    
};

AbstractMap.prototype.containsKey = function(key) {
    
};

AbstractMap.prototype.containsValue = function(val) {
    
};

AbstractMap.prototype.entrySet = function() {
    
};

AbstractMap.prototype.equals = function(object) {
    
};

AbstractMap.prototype.get = function(key) {
    
};

AbstractMap.prototype.hashCode = function() {
    
};

AbstractMap.prototype.isEmpty = function() {
    
};

AbstractMap.prototype.keySet = function() {
    
};

AbstractMap.prototype.put = function(key, value) {
    
};

AbstractMap.prototype.putAll = function(map) {
    
};

AbstractMap.prototype.remove = function(key) {
    
};

AbstractMap.prototype.size = function() {
    
};

AbstractMap.prototype.toString = function() {
    var toReturn = [];
    for(var property in this) {
        if(this.hasOwnProperty(property)) {
            toReturn.push(property)
            toReturn.push(this[property]);
        }
    }
    return toReturn.join(',');
};

AbstractMap.prototype.values = function() {
    
};