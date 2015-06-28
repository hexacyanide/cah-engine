var Manager = require('./manager');

function Engine() {
  this.games = {};
  this.manager = new Manager();
}

Engine.prototype.addGame = function(game) {
  var id = game.getId();
  this.games[id] = game;
};

Engine.prototype.getGame = function(id) {
  return this.games[id];
};

Engine.prototype.getUserManager = function() {
  return this.manager;
};

module.exports = Engine;
