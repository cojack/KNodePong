var Entity,
    ComponentType = require("ComponentType.js");

module.exports = Entity = function(world, id) {
    this.world = world;
    this.id = id;
    this.entityManager = world.getEntityManager();
    this.componentManager = world.getComponentManager();
    
    this.reset();
};

Entity.prototype.uuid;
Entity.prototype.world;
Entity.prototype.id;
Entity.prototype.entityManager;
Entity.prototype.componentManager;
Entity.prototype.systemBits;
Entity.prototype.componentBits;

Entity.prototype.getId = function() {
    return this.id;
};

Entity.prototype.getComponentBits = function() {
    return this.componentBits;
};

Entity.prototype.getSystemBits = function() {
    return this.systemBits;
};

Entity.prototype.reset = function() {
    this.systemBits.clear();
    this.componentBits.clear();
    this.uuid = this.UUID.randomUUID();
};

Entity.prototype.toString = function() {
    return "Entity[" + this.id + "]";
};

Entity.prototype.addComponent = function(component, type) {
    if(!(type instanceof ComponentType)) {
        type = ComponentType.getTypeFor(component.getClass());
    }
    this.componentManager.addComponent(this, type, component);
    return this;
};

Entity.prototype.removeComponent = function(component) {
    var componentType;
    if(!(component instanceof ComponentType)) {
        componentType = ComponentType.getTypeFor(component);
    } else {
        componentType = component;
    }
    this.componentManager.removeComponent(this, componentType);
};


Entity.prototype.isActive = function() {
    return this.entityManager.isActive(this.id);
};

Entity.prototype.isEnabled = function() {
    return this.entityManager.isEnabled(this.id);
};

Entity.prototype.getComponent = function(type) {
    var componentType;
    if(!(type instanceof ComponentType)) {
        componentType = ComponentType.getTypeFor(type);
    } else {
        componentType = type;
    }
    return this.componentManager.getComponent(this, componentType);
};

Entity.prototype.getComponents = function(fillBag) {
    return this.componentManager.getComponentsFor(this, fillBag);
};

Entity.prototype.addToWorld = function() {
    this.world.addEntity(this);
};

Entity.prototype.changedInWorld = function() {
    this.world.changedEntity(this);
};

Entity.prototype.deleteFromWorld = function() {
    this.world.deleteEntity(this);
};

Entity.prototype.enable = function() {
    this.world.enable(this);
};

Entity.prototype.disable = function() {
    this.world.disable(this);
};

Entity.prototype.getUuid = function() {
    return this.uuid;
};

Entity.prototype.getWorld = function() {
    return this.world;
};