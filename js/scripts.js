var wordOrder = function(userPhrase) {
  var sortedArray = userPhrase.split(" ").sort();

  var finalWordList = [];
  var finalWordCount = [];
  var outputArray = [];

  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] !== sortedArray[i]) {
      finalWordList.push(sortedArray[i]);
    }
  }

  finalWordList.forEach(function(word) {
    var count = 0;
    for (var i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === word) {
        count ++;
      }
    }
    finalWordCount.push(count);
  });

  for (var i = 0; i < finalWordList.length; i++) {
    outputArray.push([finalWordCount[i], finalWordList[i]]);
  }

  outputArray.sort().reverse();
  return outputArray;
};
