/**
 * Identify if targetSum is in a subset of a given set
 * e.g. subSetSum([1,3,9,2], 5) => true
 * e.g. subSetSum([1,3,9,2], 7) => false
 */
function subSetSum(set, targetSum) {
  var savedSums = [true];
  var sums = [];
  for (var i = 1; i <= targetSum; i++) {
    savedSums[i] = false;
  }
  for (i = 0; i < set.length; i++) {
    var value = set[i];
    for (var j = 0; j < savedSums.length; j++) {
      if (value <= j) sums[j] = savedSums[j] || savedSums[j - value];
      else sums[j] = savedSums[j];
    }
    savedSums = sums;
    sums = [];
  }
  return savedSums[targetSum];
}

module.exports = subSetSum;