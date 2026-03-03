// Problem: Find the Highest Altitude
// LeetCode: https://leetcode.com/problems/find-the-highest-altitude/
// Language: javascript
// Runtime: 54 ms
// Memory: 42.4 MB
// Submitted: 2023-05-10

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let n = gain.length
    let arr = new Array(n+1).fill(0)
    
    for(let i=1;i<=n;i++){
        arr[i] = arr[i-1]+gain[i-1]
    }
    
    return Math.max(...arr)
};
