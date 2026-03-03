// Problem: Score of a String
// LeetCode: https://leetcode.com/problems/score-of-a-string/
// Language: javascript
// Runtime: 67 ms
// Memory: 50.3 MB
// Submitted: 2024-06-01

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  
    let cc = 0
    
    for(let i=1;i<s.length;i++) {
        cc+=Math.abs(s.charCodeAt(i-1) - s.charCodeAt(i))
    }
    
    return cc
};
