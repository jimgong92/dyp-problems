function longestComSubseq(s1, s2) {
  var nullRow = [''];
  var savedSeq = [''];
  var nextSeq = [];

  for (var i = 0; i < s2.length; i++) {
    savedSeq.push('');
  }
  for (var r = 0; r < s1.length; r++) {
    nextSeq.push('');
    for (var c = 0; c < s2.length; c++) {
      if (s1[r] === s2[c]) {
        nextSeq.push(savedSeq[c] + s1[r]);
      }
      else {
        nextSeq.push(maxNeighbor(c + 1, savedSeq, nextSeq));
      }
    }
    console.log(savedSeq);
    savedSeq = nextSeq;
    nextSeq = [];
  }
  console.log(savedSeq);
  return savedSeq[savedSeq.length - 1];
}


function maxNeighbor(i, prevSet, currSet) {
  var diag = prevSet[i - 1];
  var above = prevSet[i];
  var left = currSet[i - 1];
  // console.log(matrix);
  var max = diag; // Init with diagonal
  if (above.length > max.length) max = above;
  if (left.length > max.length) max = left;
  return max;
}

module.exports = longestComSubseq;
