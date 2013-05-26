var ComponentType;

// @TODO do przepisania, to tak nie zadziala

var ComponentType = {
    INDEX: 0,
    index: null,
    type: null,
    componentTypes: {},
    
    getIndex: function() {
        return this.index;  
    },
    
    toString: function() {
        return "ComponentType["+this.type.getSimpleName()+"] ("+this.index+")";
    },
    
    getTypeFor: function() {
        
    },
    
    getIndexFor: function() {
        
    }
};

Object.defineProperty(ComponentType, 'INDEX', {
    value : 0
});

Object.defineProperty(ComponentType, 'index', {
    value: null
});

Object.defineProperty(ComponentType, 'type', {
    value: null
});

Object.defineProperty(ComponentType, 'componentTypes', {
    value: {}
});