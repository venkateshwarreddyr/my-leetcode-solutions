// Problem: Iterator for Combination
// LeetCode: https://leetcode.com/problems/iterator-for-combination/
// Language: javascript
// Runtime: 99 ms
// Memory: 47.7 MB
// Submitted: 2023-07-09

cl = console.log
/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (ch, combinationLength) {
  let an = []
  function fn(s, i) {
    if (s.length === combinationLength) {
      an.push(s)
      return;
    }


    for (let j = i; j < ch.length; j++) {
      fn(s + ch[j], j + 1)
    }
  }

  fn("", 0)

  CombinationIterator.prototype.next = function () {
    return an.shift()
  }
  CombinationIterator.prototype.hasNext = function () {
    return an.length > 0
  }
};


