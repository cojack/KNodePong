var ComponentMapper,
    Manager = require("./Manager.js"),
    ComponentType = require("./ComponentType.js");

module.exports = ComponentMapper = function(t, world) {
    
    Manager.call(this);
    
    var type;
    var classType;
    var components;
    
    function construct(t, world) {
        type = ComponentType.getTypeFor(t);
        components = world.getComponentManager().getComponentsByType(type);
        classType = t;
    }
    
    function initialize() {}
    
    function removeComponentsOfEntity() {
        
    }
    
    function addComponent() {
        
    }
    
    function removeComponent() {
        
    }
    
    function getComponentsByType() {
        
    }
    
    function getComponent() {
        
    }
    
    this.getComponentsFor = function(entity, fillBag) {
        
        return fillBag;
    };
    
    //@Override
    this.deleted = function(entity) {
        deleted.add(entity);
    };
    
    function clean() {
        
    }
    
    construct(t, world);
};

ComponentMapper.prototype = Object.create(Manager.prototype);