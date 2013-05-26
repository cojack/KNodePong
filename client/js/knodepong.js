var io = io || {},
KSceneManager = KSceneManager || {},
KNodePong = function(container) {
    this.sceneManager = new KSceneManager(this, container);
};

KNodePong.prototype.socket = {};

KNodePong.prototype.start = function() {
    var me = this;
    this.socket = io.connect(document.location.origin+'/lobby');
    this.createScene('load');
    this.socket.on('connect', function() {
       me.createScene('login'); 
    });
};

KNodePong.prototype.createScene = function(scene) {
    scene = scene + 'Scene';
    if(this.sceneManager[scene] instanceof Function) {
        this.sceneManager[scene]();
    } else {
        // hmmm will trigger some error
    }
};

KNodePong.prototype.onLogin = function(nick) {
    var me = this;
    this.socket.emit('createPlayer', nick, function(res) {
        console.log(res);
        me.createScene('lobby');
    });
};

KNodePong.prototype.onCreateGame = function() {
    var me = this;
    this.socket.emit('createGame', function() {
        me.createScene('game');
    });
};