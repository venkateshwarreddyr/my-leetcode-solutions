// Problem: Find the K-th Character in String Game I
// LeetCode: https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/
// Language: javascript
// Runtime: 1 ms
// Memory: 54.4 MB
// Submitted: 2025-08-03

var kthCharacter = function (k) {
  let final = [0]
  while (final.length < k) {
    const oldLen = final.length
    for (let i = 0; i < oldLen; i++) {
      final.push((final[i] + 1) % 26)
    }
  }
  return String.fromCharCode('a'.charCodeAt(0) + final[k - 1])
};

