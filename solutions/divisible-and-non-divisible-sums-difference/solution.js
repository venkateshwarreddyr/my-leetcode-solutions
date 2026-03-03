// Problem: Divisible and Non-divisible Sums Difference
// LeetCode: https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/
// Language: javascript
// Runtime: 55 ms
// Memory: 42.3 MB
// Submitted: 2023-10-08

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let msum = 0
    let nmsum = 0
    
    for(let i=1;i<=n;i++){
        if(i%m === 0) msum+=i
        else nmsum+=i
    }
    
    return nmsum - msum
};
