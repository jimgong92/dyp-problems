/**
 * Given two strings S1 and S2, find the longest common substring between S1 and S2
 */
function longestComSubString(s1, s2) {
  var longest = '';
  var nullRow = [''];
  for (var i = 0; i < s2.length; i++) nullRow.push('');

  var matrix = [nullRow];
  for (var r = 0; r < s1.length; r++) {
    matrix.push(['']);
    // console.log(matrix);
    for (var c = 0; c < s2.length; c++) {
      if (s1[r] === s2[c]) {
        var seq = matrix[r][c] + s1[r];
        matrix[r + 1][c + 1] = seq;
        if (seq.length > longest.length) longest = seq;
      }
      else matrix[r + 1][c + 1] = '';
    }
  }

  return longest;
}

module.exports = longestComSubString;
