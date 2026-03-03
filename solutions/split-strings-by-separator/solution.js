// Problem: Split Strings by Separator
// LeetCode: https://leetcode.com/problems/split-strings-by-separator/
// Language: javascript
// Runtime: 104 ms
// Memory: 49.3 MB
// Submitted: 2023-07-23

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    words = words.map(e => e.split(separator).filter(e => e))
    
    return words.flat()
};
