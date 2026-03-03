// Problem: Remove All Occurrences of a Substring
// LeetCode: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
// Language: javascript
// Runtime: 72 ms
// Memory: 39.7 MB
// Submitted: 2021-06-26

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while(s.includes(part))
        {
            s = s.replace(part, '')
            
        }
    return s
    
};
