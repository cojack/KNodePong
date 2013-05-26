var KSceneManager;

KSceneManager = function(knodepong, container) {
    this.knodepong = knodepong;
    this.container = document.getElementById(container);   
};

KSceneManager.prototype.cleanScene = function() {
    while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
    }
}

KSceneManager.prototype.loadScene = function() {
    var loading = document.createElement('div'),
        inner = document.createElement('div');
        
    loading.setAttribute('class', 'loading');
    inner.setAttribute('class', 'loading-inner');
    this.container.appendChild(loading);
    this.container.appendChild(inner);
};

KSceneManager.prototype.loginScene = function() {
    this.cleanScene();
    
    var fieldset = document.createElement('fieldset'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        submit = document.createElement('input'),
        me = this;
    
    input.setAttribute('id', 'nick');
    
    label.appendChild(document.createTextNode('Login'));
    label.setAttribute('for', 'nick');
    
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Zaloguj');
    submit.onclick = function() {
        me.knodepong.onLogin(input.value);
    };
    
    fieldset.appendChild(label);
    fieldset.appendChild(input);
    fieldset.appendChild(submit);
    
    this.container.appendChild(fieldset);
};

KSceneManager.prototype.lobbyScene = function(rooms) {
    this.cleanScene();
    
    rooms = rooms || [];
    
    var me = this,
        containerCreateGame = document.createElement('div'),
        buttonCreateGame = document.createElement('button');
        
    containerCreateGame.setAttribute('id', 'create-game');
    buttonCreateGame.appendChild(document.createTextNode('Create game'));
    
    buttonCreateGame.onclick = function() {
        me.knodepong.onCreateGame();
    };
    
    containerCreateGame.appendChild(buttonCreateGame);
    this.container.appendChild(containerCreateGame);
    
    var ul = document.createElement('ul');
    for(var i = 0; i < rooms.length; ++i) {
        var li = document.createElement('li'),
            p = document.createElement('p'),
            spanGameName = document.createElement('span'),
            spanPlayersCount = document.createElement('span'),
            buttonJoinGame = document.createElement('button');
            
        buttonJoinGame.setAttribute('class', 'game-join');
        buttonJoinGame.appendChild(document.createTextNode('Join'));
        buttonJoinGame.onclick = function() {
            me.knodepong.onJoinGame(rooms[i].id);
        };
        
        spanGameName.setAttribute('class', 'game-name');
        spanGameName.appendChild(document.createTextNode(rooms[i].name));
        
        spanPlayersCount.setAttribute('class', 'game-players-count');
        spanPlayersCount.appendChild(document.createTextNode(rooms[i].players.length));
        if(rooms[i].players.length >= 2) {
            spanPlayersCount.className += ' full';
        }
        
        p.appendChild(spanGameName);
        p.appendChild(spanPlayersCount);
        p.appendChild(buttonJoinGame);
        
        li.appendChild(p);
        ul.appendChild(li);
    }
    this.container.appendChild(ul);
};