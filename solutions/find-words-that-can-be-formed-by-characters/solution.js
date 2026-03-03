// Problem: Find Words That Can Be Formed by Characters
// LeetCode: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// Language: javascript
// Runtime: 213 ms
// Memory: 50.2 MB
// Submitted: 2023-05-25

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let o = {}
  for (let c of chars) {
    o[c] = o[c] || 0
    o[c]++
  }
  let an = 0
  xx:
  for (let word of words) {
    lo = { ...o }
    for (let c of word) {
      if (lo[c]) {
        lo[c]--
      } else {
        continue xx;
      }
    }
    an += word.length
  }

  return an;
};
