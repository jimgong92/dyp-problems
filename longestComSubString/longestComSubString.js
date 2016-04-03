/**
 * Given two strings S1 and S2, find the longest common substring between S1 and S2
 */
function longestComSubString(s1, s2) {
  var lastRowIndex, lastColIndex;
  var nullRow = [''];
  for (var i = 0; i < s2.length; i++) nullRow.push('');

  var matrix = [nullRow];
  for (var r = 0; r < s1.length; r++) {
    matrix.push(['']);
    var currChar = s1[r];
    for (var c = 0; c < s2.length; c++) {
      if (s2[c] === currChar && (lastRowIndex === undefined || lastRowIndex === r - 1) && (lastColIndex === undefined || lastColIndex === c - 1)) {
        matrix[r + 1][c + 1] = matrix[r][c] + currChar;
        lastRowIndex = r;
        lastColIndex = c;
      }
      else {
        matrix[r + 1][c + 1] = maxNeighbor(r + 1, c + 1, matrix);
      }
    }
  }

  return matrix[s1.length][s2.length]
}

function maxNeighbor(r, c, matrix) {
  var diag = matrix[r - 1][c - 1];
  var above = matrix[r - 1][c];
  var left = matrix[r][c - 1];
  // console.log(matrix);
  var max = diag; // Init with diagonal
  if (above.length > max.length) max = above;
  if (left.length > max.length) max = left;
  return max;
}

module.exports = longestComSubString;
