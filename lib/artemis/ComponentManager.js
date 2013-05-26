var ComponentManager,
    Manager = require("./Manager.js"),
    util = require("util");
    
module.exports = ComponentManager = function() {
    
    var componentsByType;
    var deleted;
    
    function construct() {
        componentsByType = [];
        deleted = {};
    }
    
    function initialize() {
        
    }
    
    function removeComponentsOfEntity(entity) {
    }
    
    function addComponent(entity, type, component) {
        
    }
    
    function removeComponent() {
        
    }
    
    function getComponentsByType() {
    }
    
    function getComponent() {
        
    }
    
    this.getComponentsFor = function() {
        
    };
    
    this.deleted = function(entity) {
        deleted.push(entity);
    };
    
    function clean() {
        
    }
};

util.inherits(ComponentManager, Manager);