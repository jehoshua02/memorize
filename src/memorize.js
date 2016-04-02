var randomInt = require('random-int');

module.exports = function (input) {
  var words = input.split(' ');
  var n = Math.floor(words.length * 0.5);
  _hideWords(words, n);
  return words.join(' ');
}

function _hideWords(words, n, p, r) {
  p = p || 0;
  r = r || words.length - 1;
  var q = Math.floor((r - p) / 2) + p;

  if (n === 0) {
    return;
  } else if (n === 1) {
    var index = randomInt(p, r);
    _hideWord(words, index);
  } else if (n === 2) {
    _hideWord(words, randomInt(p, q));
    _hideWord(words, randomInt(q+1, r));
  } else {
    _hideWords(words, Math.ceil(n / 2), p, q);
    _hideWords(words, Math.floor(n / 2), q + 1, r);
  }
}

function _hideWord(words, index) {
  var word = words[index];
  words[index] = '_'.repeat(word.length);
}
