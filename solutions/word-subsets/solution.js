// Problem: Word Subsets
// LeetCode: https://leetcode.com/problems/word-subsets/
// Language: javascript
// Runtime: 208 ms
// Memory: 69.5 MB
// Submitted: 2023-11-04

cl = console.log
var wordSubsets = function (words1, words2) {
  words2 = new Set(words2);

  let mapMaxFreqPerCharForAnyBWord = new Map();
  words2.forEach((w) => {
    let map = new Map();
    for (let c of w) map.set(c, (map.get(c) || 0) + 1);
    for (let [c, freq] of map) mapMaxFreqPerCharForAnyBWord.set(c, Math.max(freq, mapMaxFreqPerCharForAnyBWord.get(c) || 0));
  });
    cl(mapMaxFreqPerCharForAnyBWord)
  return words1.filter((w) => {
    let map = new Map();
    for (let c of w) map.set(c, (map.get(c) || 0) + 1);
    for (let [c, maxCFreqOfAnyWinB] of mapMaxFreqPerCharForAnyBWord) {
      if ((map.get(c) || 0) < maxCFreqOfAnyWinB) return false;
    }
    return true;
  });
};
