var expect = require('chai').expect;
var longestComSubString = require('./longestComSubString');

describe('Longest Common Substring', function() {
  it('should retrieve the longest common substring between two strings', function(done) {
    expect(longestComSubString('kitten', 'sitting')).to.equal('itt');
    done();
  });
  it('should identify longer substrings that occur later', function(done) {
    expect(longestComSubString('blahgoon', 'blegoon')).to.equal('goon');
    done();
  });
});