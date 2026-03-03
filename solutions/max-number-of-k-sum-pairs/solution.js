// Problem: Max Number of K-Sum Pairs
// LeetCode: https://leetcode.com/problems/max-number-of-k-sum-pairs/
// Language: javascript
// Runtime: 85 ms
// Memory: 68.7 MB
// Submitted: 2025-11-30

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  let count = new Map();
  let operations = 0;

  for (const num of nums) {
    let complement = k - num;

    if (count.has(complement) && count.get(complement) > 0) {
      operations += 1;
      count.set(complement, count.get(complement) - 1);
    } else {
      count.set(num, (count.get(num) || 0) + 1);
    }
  }

  return operations;
};
