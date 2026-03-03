// Problem: Find Closest Person
// LeetCode: https://leetcode.com/problems/find-closest-person/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.5 MB
// Submitted: 2025-06-14

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let diff1 = Math.abs(z - x)
    let diff2 = Math.abs(z - y)

    if(diff1 < diff2) {
        return 1
    } else if (diff1 > diff2) {
        return 2
    }

    return 0
    
};
