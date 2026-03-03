// Problem: Truncate Sentence
// LeetCode: https://leetcode.com/problems/truncate-sentence/
// Language: javascript
// Runtime: 72 ms
// Memory: 39.2 MB
// Submitted: 2021-09-07

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ')
};
