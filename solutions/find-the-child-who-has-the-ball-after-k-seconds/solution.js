// Problem: Find the Child Who Has the Ball After K Seconds
// LeetCode: https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/
// Language: javascript
// Runtime: 56 ms
// Memory: 49.7 MB
// Submitted: 2024-06-09

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    let pos = true
    let curr = 0
    
    while(k--) {
        if(pos) {
            curr++
        } else {
            curr--
        }
        
        if(curr === 0){
            pos = true
        }
        if(curr === n-1) {
            pos = false
        }
    }
    
    return curr
};
