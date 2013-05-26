var Aspect,
    BitSet = require("Bitset"),
    ComponentType = require("ComponentType.js");

module.exports = Aspect = function() {
    this.allSet = new BitSet();
    this.exclusionSet = new BitSet();
    this.oneSet = new BitSet();
};

Aspect.prototype.allSet;
Aspect.prototype.exclusionSet;
Aspect.prototype.oneSet;

Aspect.prototype.getAllSet = function() {
    return this.allSet;
};

Aspect.prototype.getExclusionSet = function() {
    return this.exclusionSet;
};

Aspect.prototype.getOneSet = function() {
    return this.oneSet;
};

Aspect.prototype.all = function(type) {
    this.allSet.set(ComponentType.getIndexFor(type));
    
    for(var i = 0; i < arguments.length; i++) {
        this.allSet.set(ComponentType.getIndexFor(arguments[i]));
    }
    
    return this;
};

Aspect.prototype.exclude = function(type) {
    this.exclusionSet.set(ComponentType.getIndexFor(type));
    
    for(var i = 0; i < arguments.length; i++) {
        this.exclusionSet.set(ComponentType.getIndexFor(arguments[i]));
    }
    
    return this;    
};

Aspect.prototype.one = function(type) {
    this.oneSet.set(ComponentType.getIndexFor(type));
    
    for(var i = 0; i < arguments.length; i++) {
        this.oneSet.set(ComponentType.getIndexFor(arguments[i]));
    }
    
    return this;
};

Aspect.prototype.getAspectFor = function(type) {
    this.getAspectForAll(type, arguments);
};

Aspect.prototype.getAspectForAll = function(type) {
    var aspect = new Aspect();
    aspect.all(type, arguments);
    return aspect;
};

Aspect.prototype.getAspectForOne = function(type) {
    var aspect = new Aspect();
    aspect.one(type, arguments);
    return aspect;    
};

Aspect.prototype.getEmpty = function() {
    return new Aspect();
};