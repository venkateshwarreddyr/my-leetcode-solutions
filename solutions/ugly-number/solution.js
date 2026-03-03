// Problem: Ugly Number
// LeetCode: https://leetcode.com/problems/ugly-number/
// Language: javascript
// Runtime: 112 ms
// Memory: 43.7 MB
// Submitted: 2022-02-05

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n<1) return false
    if(n===1) return true
    for(let p of [2,3,5]){
        while(n%p===0){
            n=n/p
        }
    }
    if(n===1) return true
    return false
};

