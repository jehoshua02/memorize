var memorize = require('./memorize');

describe('memorize', function () {
  it('should return string with some words missing', function () {
    var input = 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.';

    var actual = memorize(input);
    console.log(input);
    console.log(actual);

    expect(actual.length).to.equal(input.length);
    expect(actual).to.not.equal(input);

    var n = actual.replace(/_+/g, '_').split(' ').filter(function (word) {
      return word === '_';
    }).length;

    expect(n).to.equal(12);

  });
});
