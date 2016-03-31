var expect = require('chai').expect;
var subSetSum = require('./subSetSum');

describe('Subset Sum', function() {
  it('should detect if a subset matches target sum', function(done) {
    var res = subSetSum([1,3,9,2], 5);
    expect(res).to.be.true;
    done();
  });
  it('should detect if a subset doesn\'t match target sum', function(done) {
    var res = subSetSum([1,3,9,2], 20);
    expect(res).to.be.false;
    done();
  });
});