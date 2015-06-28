var Card = require('./card');

function Deck() {
  this.cards = [];
  this.discard = [];
}

Deck.prototype.drawCard = function() {
  var card = this.cards.shift();
  this.discard.push(card);
  return card;
};

Deck.prototype.drawCards = function(count) {
  return this.cards.splice(0, count);
};

Deck.prototype.shuffle = function() {
  // to be implemented
};

module.exports = Deck;
