/**
 * Given two strings S1 and S2, find out the minimum edit distance
 * to transform S1 to S2 
 * Operations: Insert, Deletion, Substitution
 */

function minStrEditDistance(s1, s2) {
  var fromPrevSet = [0]; // Initially the null string against the null string
  var againstCurrentChar = [];
  for (var i = 0; i < s1.length; i++) {
    fromPrevSet.push(i + 1); // Current state of s1 against the null string
  }
  // Now build up edits against the current state of s2, starting with the first non-null char
  for (i = 0; i < s2.length; i++) {
    againstCurrentChar.push(i + 1);
    for (var j = 1; j < fromPrevSet.length; j++) {
      if (s2[i] === s1[j - 1]) againstCurrentChar.push(fromPrevSet[j - 1]);
      else againstCurrentChar.push(minNeighbor(j, fromPrevSet, againstCurrentChar) + 1);
    }
    fromPrevSet = againstCurrentChar;
    againstCurrentChar = [];
  }
  return fromPrevSet[fromPrevSet.length - 1];
}

function minNeighbor(index, prevSet, currSet) {
  var min = prevSet[index]; // Initialize to above because that will always exist
  if (index > 0) {
    // Check to left
    if (currSet[index - 1] < min) min = currSet[index - 1];
    // Check the diagonal
    if (prevSet[index - 1] < min) min = prevSet[index - 1];
  }
  return min;
}

module.exports = minStrEditDistance;
