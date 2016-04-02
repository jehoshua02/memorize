var Memorize = require('./memorize');
var _ = require('lodash');

describe('Memorize', function () {
  var input = 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.';

  it('should return string with some words missing', function () {
    var actual = new Memorize(input).hide(12).toString();
    expect(actual.length).to.equal(input.length);
    expect(actual).to.not.equal(input);
    expect(actual.match(/_+/g).length).to.equal(12);
  });

  it('should unhide words too', function () {
    var actual = new Memorize(input).hide(12).unhide(3).toString();
    expect(actual.match(/_+/g).length).to.equal(9);
  });

  it('should hide/unhide percentage of words', function () {
    var actual = new Memorize(input).hidePercent(0.5).toString();
    expect(actual.match(/_+/g).length).to.equal(13);
    actual = new Memorize(input).hidePercent(0.75).toString();
    expect(actual.match(/_+/g).length).to.equal(19);
  });
});
