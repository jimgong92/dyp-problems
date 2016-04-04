var expect = require('chai').expect;
var longestComSubseq = require('./longestComSubseq');

describe('Longest Common Subsequence', function() {
  it('should return the longest common subsequence between two strings', function(done) {
    var res = longestComSubseq('ACDAB', 'ACBEA');
    expect(res).to.equal('ACA');
    expect(res.length).to.equal(3);
    done();
  });
})