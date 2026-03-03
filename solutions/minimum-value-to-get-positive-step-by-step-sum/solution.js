// Problem: Minimum Value to Get Positive Step by Step Sum
// LeetCode: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
// Language: javascript
// Runtime: 53 ms
// Memory: 41.6 MB
// Submitted: 2023-07-06

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let sum = 0, min = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    min = Math.min(min, sum)
  }

  return 1 - min
};
