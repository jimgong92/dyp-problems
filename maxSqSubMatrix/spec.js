var expect = require('chai').expect;
var maxSqSubMatrix = require('./maxSqSubMatrix');

describe('Maximum size square submatrix', function() {
  it('should get the size of the largest square submatrix of matrix size 2', function(done) {
    var matrix = [
      [1,0],
      [1,0]
    ];
    var res = maxSqSubMatrix(matrix);
    expect(res).to.equal(1);
    done();
  });
  it('should get the size of the largest square submatrix', function(done) {
    var matrix = [
      [0,1,1,0,1],
      [1,1,1,1,0],
      [1,1,1,1,0],
      [1,1,1,1,0],
      [0,1,1,1,1]
    ];
    var res = maxSqSubMatrix(matrix);
    expect(res).to.equal(3);
    done();
  });
});