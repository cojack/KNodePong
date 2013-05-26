var TeamManager;

module.exports = TeamManager = function() {
    this.playersByTeam = {};
    this.teamByPlayer = {};
};

TeamManager.prototype.playersByTeam = {};
TeamManager.prototype.teamByPlayer = {};

TeamManager.prototype.getTeam = function(player) {
    return this.teamByPlayer.get(player);
};

TeamManager.prototype.setTeam = function(player, team) {
    this.removeFromTeam(player);
    
    this.teamByPlayer.put(player, team);
    
    var players = this.playersByTeam.get(team);
    if(players === null) {
            players = {}; //new Bag<String>();
            this.playersByTeam.put(team, players);
    }
    players.add(player);
};

TeamManager.prototype.getPlayers = function(team) {
    return this.playersByTeam.get(team);
};

TeamManager.prototype.removeFromTeam = function(player) {
    var team = this.teamByPlayer.remove(player);
    if(team !== null) {
        var players = this.playersByTeam.get(team);
        if(players !== null) {
                players.remove(player);
        }
    }
}