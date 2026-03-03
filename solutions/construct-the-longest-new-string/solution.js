// Problem: Construct the Longest New String
// LeetCode: https://leetcode.com/problems/construct-the-longest-new-string/
// Language: javascript
// Runtime: 109 ms
// Memory: 45.6 MB
// Submitted: 2023-06-24

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
    let min = Math.min(x,y)
    
    let an = min*4+z*2
    
    x=x-min
    y=y-min
    if(x || y){
        an+=2
    }
    
    return an
};
