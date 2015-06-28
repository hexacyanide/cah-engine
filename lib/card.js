function Card(data) {
  this.id = data.id;
  this.type = data.type;
  this.text = data.text;
  this.answerCount = data.answerCount;
  this.expansion = data.expansion;
}

Card.prototype.getId = function() {
  return this.id;
};

Card.prototype.getType = function() {
  return this.type;
};

Card.prototype.getText = function() {
  return this.text;
};

Card.prototype.getAnswerCount = function() {
  return this.answerCount;
};

Card.prototype.getExpansion = function() {
  return this.expansion;
};

module.exports = Card;
