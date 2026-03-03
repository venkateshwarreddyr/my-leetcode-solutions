// Problem: Find N Unique Integers Sum up to Zero
// LeetCode: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
// Language: javascript
// Runtime: 64 ms
// Memory: 42.4 MB
// Submitted: 2023-05-10

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = new Array(n).fill(0)
    
    for(let i=n%2===1?1:0;i<n;i+=2){
        arr[i] = i+1
        arr[i+1] = -(i+1)
    }
    
    return arr;
};
