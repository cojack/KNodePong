var EntityObserver;

module.exports = EntityObserver = function() {
};

EntityObserver.prototype.added = function(entity) {};
EntityObserver.prototype.changed = function(entity) {};
EntityObserver.prototype.deleted = function(entity) {};
EntityObserver.prototype.enabled = function(entity) {};
EntityObserver.prototype.disabled = function(entity) {};