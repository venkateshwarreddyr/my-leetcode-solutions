// Problem: XOR Operation in an Array
// LeetCode: https://leetcode.com/problems/xor-operation-in-an-array/
// Language: javascript
// Runtime: 76 ms
// Memory: 38.4 MB
// Submitted: 2021-05-30

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let ans = start;
    for(let i = 1;i<n; i++){
        ans ^= start + 2*i;
    }
    return ans
};
