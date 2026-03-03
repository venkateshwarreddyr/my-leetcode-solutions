// Problem: Number of Subsequences That Satisfy the Given Sum Condition
// LeetCode: https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
// Language: javascript
// Runtime: 198 ms
// Memory: 56.1 MB
// Submitted: 2023-07-26

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
    let pow = [];
    pow.push(1);

    nums.sort((a, b) => { return a - b; })

    const mod = 1e9 + 7;

    for (let i = 1; i < nums.length; i++) {
        pow.push((pow[pow.length - 1] * 2) % mod);
    }

    let res = 0
    for (let i = 0, j = nums.length - 1; i <= j; i++) {
        while (nums[i] + nums[j] > target) {
            j--;
        }
        if (i > j) break
        res = (res + pow[j - i]) % mod;
    }

    return res;
};
