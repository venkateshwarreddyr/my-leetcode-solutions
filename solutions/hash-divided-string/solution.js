// Problem: Hash Divided String
// LeetCode: https://leetcode.com/problems/hash-divided-string/
// Language: javascript
// Runtime: 2 ms
// Memory: 58 MB
// Submitted: 2025-10-15

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function (s, k) {
  let result = "";
  let sum = 0;

    const a_charCode = 'a'.charCodeAt(0)

  for (let i = 0; i < s.length; i++) {
    sum = (sum + (s.charCodeAt(i) - a_charCode)) % 26;

    if ((i + 1) % k === 0) {
      result += String.fromCharCode(a_charCode + sum);
      sum = 0;
    }
  }

  return result;
};

