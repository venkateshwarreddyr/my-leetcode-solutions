// Problem: Find the Sum of Encrypted Integers
// LeetCode: https://leetcode.com/problems/find-the-sum-of-encrypted-integers/
// Language: javascript
// Runtime: 81 ms
// Memory: 54.1 MB
// Submitted: 2024-03-16

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let sum = 0
    for(let num of nums) {
        let x = num.toString().split('').map(e => Number(e))
        let max = Math.max(...x);
        let ans = 0
        for(let e of x) {
            ans = ans * 10 + max
        }
        sum += ans
    }
    
    return sum;
};
