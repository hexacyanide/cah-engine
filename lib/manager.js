function Manager() {
  this.players = {};
}

Manager.prototype.addPlayer = function(player) {
  var name = player.getName();
  this.players[name] = player;
};

Manager.prototype.getPlayer = function(name) {
  return this.players[name];
};

module.exports = Manager;
