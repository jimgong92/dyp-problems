var expect = require('chai').expect;
var minJumpToEnd = require('./minJumpToEnd');

describe('Minimum jumps to reach end of array', function() {
  it('should return the minimum number of jumps required to reach the end of an array', function(done) {
    var testCase = [5,2,3,1,6,2,4,1,8,9,0,2];
    var res = minJumpToEnd(testCase);
    expect(res.length).to.equal(4);
    expect(res).to.eql([5,6,8,2]);
    done();
  });
  it('should return null if impossible to reach end', function(done) {
    var testCase = [0,14,5,134,5];
    var res = minJumpToEnd(testCase);
    expect(res).to.be.null;
    done();
  });
});