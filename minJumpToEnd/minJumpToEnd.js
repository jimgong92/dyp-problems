function minJumpToEnd(arr) {
  var i = 0;
  var oldMaxEnd = arr[0];
  var noGreater = !oldMaxEnd; // Will be true if arr[0] === 0 
  var endPosition;
  var sequence = [];
  while (i < arr.length && !noGreater) {
    noGreater = true;
    sequence.push(arr[i]);
    if (i === arr.length - 1) return sequence;
    var j = i + 1;
    var endIndex = arr[i] + j;
    for (j; j < arr.length && j < endIndex; j++) {
      endPosition = arr[j] + j;
      if (endPosition > oldMaxEnd) {
        if (endPosition >= arr.length - 1) return sequence.concat([arr[j], arr[arr.length - 1]]);
        i = j;
        oldMaxEnd = endPosition;
        noGreater = false;
      }
    }
  }

  return null;
}

module.exports = minJumpToEnd;
