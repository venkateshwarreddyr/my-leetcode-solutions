// Problem: Longest String Chain
// LeetCode: https://leetcode.com/problems/longest-string-chain/
// Language: javascript
// Runtime: 103 ms
// Memory: 79.1 MB
// Submitted: 2025-11-14

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  const dp = {};
  let maxLen = 0;

  for (const word of words) {
    dp[word] = 1;
    for (let i = 0; i < word.length; i++) {
      const prev = word.slice(0, i) + word.slice(i + 1);
      if (dp[prev]) dp[word] = Math.max(dp[word], dp[prev] + 1);
    }
    maxLen = Math.max(maxLen, dp[word]);
  }

  return maxLen;
};
