// Problem: Visit Array Positions to Maximize Score
// LeetCode: https://leetcode.com/problems/visit-array-positions-to-maximize-score/
// Language: javascript
// Runtime: 113 ms
// Memory: 57.2 MB
// Submitted: 2023-07-22

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (a, x) {
  let n = a.length;
  let dp = new Array(n).fill(-Infinity);
  let k, j;
  if (a[0] % 2 === 1) {
    k = 0;
    j = -1;
  } else {
    j = 0;
    k = -1;
  }
  dp[0] = a[0];
  // j even, k-odd
    let max = a[0]
  for (let i = 1; i < n; i++) {
    if (j >= 0) {
      if (a[i] % 2 === 0) {
        dp[i] = Math.max(a[i] + dp[j], dp[i]);
      } else {
        dp[i] = Math.max(a[i] + dp[j] - x, dp[i]);
      }
    }
    if (k >= 0) {
      if (a[i] % 2 === 1) {
        dp[i] = Math.max(a[i] + dp[k], dp[i]);
      } else {
        dp[i] = Math.max(a[i] + dp[k] - x, dp[i]);
      }
    }
      if(a[i]%2 === 0) j = i
      else k = i
      max = Math.max(max, dp[i])
  }
    return max;
};

