// Problem: Generate a String With Characters That Have Odd Counts
// LeetCode: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
// Language: javascript
// Runtime: 60 ms
// Memory: 42.7 MB
// Submitted: 2022-02-03

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n%2 === 1){
        return new Array(n).fill('a').join('')
    }
    return new Array(n-1).fill('a').join('')+'b'
};
