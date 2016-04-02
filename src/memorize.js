var _ = require('lodash');

function Memorize(input) {
  this._words = input.split(' ');
  this._hidden = [];
}

Memorize.prototype.hide = function (n) {
  var sample = _(this._words).keys().difference(this._hidden).sampleSize(n).value();
  Array.prototype.push.apply(this._hidden, sample);
  return this;
}

Memorize.prototype.unhide = function (n) {
  if (!n) {
    this._hidden = [];
  } else {
    this._hidden.splice(-n, n);
  }
  return this;
}

Memorize.prototype.toString = function () {
  return _(this._words).map(function (word, index) {
    return this._hidden.indexOf(index.toString()) === -1 ? word : '_'.repeat(word.length);
  }.bind(this)).join(' ');
}

module.exports = Memorize;
