// Problem: Sorting the Sentence
// LeetCode: https://leetcode.com/problems/sorting-the-sentence/
// Language: javascript
// Runtime: 72 ms
// Memory: 38.9 MB
// Submitted: 2021-07-30

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(' ').sort((a,b) => a[a.length-1]-b[b.length-1]).map((e, i) => e.replace(i+1, '')).join(' ')
};
