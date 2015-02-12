var wordOrder = function(userPhrase) {
  var wordList = userPhrase.split(" ");
  var sortedArray = wordList.sort();

  var finalWordList = [];
  var finalWordCount = [];

  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] !== sortedArray[i]) {
      finalWordList.push(sortedArray[i]);
    }
  }

  return finalWordList;

  finalWordList.forEach(function(word) {
    var count = 0;
    for (var i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === word) {
        count ++;
      }
    }
    finalWordCount.push(count);
  });

  return finalWordCount;
};
