// Problem: Unique Binary Search Trees
// LeetCode: https://leetcode.com/problems/unique-binary-search-trees/
// Language: javascript
// Runtime: 0 ms
// Memory: 52.7 MB
// Submitted: 2025-11-13

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n, memo = {}) {
  const dp = Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};

/**
1 - 1
2 - 2
3 - 5
4 - 15
5 - 42

 */
