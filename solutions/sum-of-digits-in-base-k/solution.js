// Problem: Sum of Digits in Base K
// LeetCode: https://leetcode.com/problems/sum-of-digits-in-base-k/
// Language: javascript
// Runtime: 80 ms
// Memory: 38.3 MB
// Submitted: 2021-05-30

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let summ = 0; 
    while(n!=0){
        summ += (n%k);
        n = Math.floor(n/k)
    }
    return summ
};
