var expect = require('chai').expect;
var longestComSubString = require('longestComSubString');

describe('Longest Common Substring', function() {
  it('should retrieve the longest common substring between two strings', function(done) {
    expect(longestComSubString('kitten', 'sitting')).to.equal('itt');
    done();
  });
});