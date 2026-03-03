// Problem: Maximum Number of Words Found in Sentences
// LeetCode: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
// Language: javascript
// Runtime: 80 ms
// Memory: 40.2 MB
// Submitted: 2022-01-05

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    return sentences.reduce((acc, curr) => Math.max(curr.split(' ').length, acc), 0)
};
