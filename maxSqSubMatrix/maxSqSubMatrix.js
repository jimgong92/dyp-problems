/**
 * Given a matrix of dimensions mxn having all entries as 1 or 0,
 * find out the size of maximum size square sub-matrix with all 1s
 */
function maxSqSubMatrix(matrix) {
  var copy = [];
  var largest = 0;
  for (var i = 0; i < matrix.length; i++) {
    copy.push([]);
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[i][j]) {
        copy[i][j] = minNeighbor(i, j, copy) + 1;
        if (copy[i][j] > largest) largest = copy[i][j];
      }
      else copy[i][j] = 0;
    }
  }
  return largest;
}

// Determines
function minNeighbor(r, c, matrix) {
  var min;
  // if there is a row above it
  if (r - 1 >= 0){
    min = matrix[r-1][c];
  }
  else return 0;
  // if column to left
  if (c - 1 >= 0) {
    if (min === undefined || min > matrix[r][c-1]) min = matrix[r][c-1];
  }
  else return 0;
  // if upper-left corner
  if (min === undefined || min > matrix[r-1][c-1]) min = matrix[r-1][c-1];
  // if first square
  if (min === undefined) return 0;

  return min;
}

module.exports = maxSqSubMatrix;