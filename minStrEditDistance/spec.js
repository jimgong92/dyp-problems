var expect = require('chai').expect;
var minStrEditDistance = require('./minStrEditDistance');

describe('Minimum distance to edit strings', function() {
  it('should return the minimum number of steps to transform S1 to S2', function(done) {
    var res = minStrEditDistance('kitten', 'sitting');
    expect(res).to.equal(3); // 'k' => 's'; 'e' => 'i', +'g'
    done();
  });
});