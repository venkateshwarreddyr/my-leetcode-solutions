// Problem: Minimum Number of Chairs in a Waiting Room
// LeetCode: https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/
// Language: javascript
// Runtime: 71 ms
// Memory: 50.9 MB
// Submitted: 2024-06-08

/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let counter = 0
    let maxCounter = 0
    
    for(let e of s) {
        if(e === "E") counter++
        else counter--
        maxCounter = Math.max(maxCounter, counter)
    }
    
    return maxCounter
};
