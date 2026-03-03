// Problem: Maximum Sum Obtained of Any Permutation
// LeetCode: https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/
// Language: javascript
// Runtime: 238 ms
// Memory: 78.3 MB
// Submitted: 2023-10-21

cl = console.log

function getRangeCoeffs(n, queries) {
  let coeffs = new Array(n + 1).fill(0);
  for (let [s, e] of queries) {
    coeffs[s] += 1;
    coeffs[e + 1] -= 1;
  }
  cl(coeffs)
  for (let i = 1; i < n; i++) {
    coeffs[i] += coeffs[i - 1];
  }
  return coeffs;
}

var maxSumRangeQuery = function (nums, requests) {
  const MOD = 10 ** 9 + 7;
  let n = nums.length;

  let coeffs = getRangeCoeffs(n, requests);
    cl(coeffs)
  coeffs.sort((a, b) => b - a);
  nums.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (coeffs[i] * nums[i]) % MOD;
    sum %= MOD;
  }
  return sum;

};
