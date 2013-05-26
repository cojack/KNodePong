var TagManager;

module.exports = TagManager = function() {
    this.tagsByEntity = {};
    this.entitiesByTag = {};
};

TagManager.prototype.tagsByEntity = {};
TagManager.prototype.entitiesByTag = {};

TagManager.prototype.register = function(tag, entity) {
    this.entitiesByTag.put(tag, entity);
    this.tagsByEntity.put(entity, tag);
}

TagManager.prototype.unregister = function(tag) {
    this.tagsByEntity.remove(this.entitiesByTag.remove(tag));
}

TagManager.prototype.isRegistered = function(tag) {
    return this.entitiesByTag.containsKey(tag);
}

TagManager.prototype.getEntity = function(tag) {
    return this.entitiesByTag.get(tag);
}
        
TagManager.prototype.getRegisteredTags = function() {
    return this.tagsByEntity.values();
}
        
TagManager.prototype.deleted = function(entity) {
    var removedTag = this.tagsByEntity.remove(entity);
    if(removedTag !== null) {
        this.entitiesByTag.remove(removedTag);
    }
}

TagManager.prototype.initialize = function() {
}
