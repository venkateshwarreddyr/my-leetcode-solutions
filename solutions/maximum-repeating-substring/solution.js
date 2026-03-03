// Problem: Maximum Repeating Substring
// LeetCode: https://leetcode.com/problems/maximum-repeating-substring/
// Language: javascript
// Runtime: 48 ms
// Memory: 41.7 MB
// Submitted: 2023-05-23

cl = console.log
var maxRepeating = function (sequence, word) {
  let n = sequence.length;
  let w = word;
  let an = 0;
  while (sequence.includes(word)) {
    an++;
    word += w
  }


  return an
};

// aaabaaaab aaaba aaaba aaaba aaaba aaaba

