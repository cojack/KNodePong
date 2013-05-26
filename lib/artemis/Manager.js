var Manager,
    EntityObserver = require("./EntityObserver.js");

module.exports = Manager = function() {
    
    EntityObserver.call(this);
    
    var world;
    
    function setWorld(w) {
        world = w;
    }
    
    function getWorld() {
        return world;
    }
};

Manager.prototype = Object.create(EntityObserver.prototype);

Manager.prototype.initialize = function() {};
Manager.prototype.added = function(entity) {};
Manager.prototype.changed = function(entity) {};
Manager.prototype.deleted = function(entity) {};
Manager.prototype.disabled = function(entity) {};
Manager.prototype.enabled = function(entity) {};