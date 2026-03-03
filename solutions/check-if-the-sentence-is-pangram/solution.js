// Problem: Check if the Sentence Is Pangram
// LeetCode: https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// Language: javascript
// Runtime: 60 ms
// Memory: 39.9 MB
// Submitted: 2021-07-17

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    return (new Set(sentence.split(''))).size === 26
};
