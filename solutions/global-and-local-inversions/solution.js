// Problem: Global and Local Inversions
// LeetCode: https://leetcode.com/problems/global-and-local-inversions/
// Language: javascript
// Runtime: 73 ms
// Memory: 53.9 MB
// Submitted: 2023-10-22

var isIdealPermutation = function (a) {
  let n = a.length;

  let prefixMax = new Array(n);
  for (let i = 0, max1 = -Infinity; i < n; i++) {
    prefixMax[i] = max1 = Math.max(max1, a[i]);
  }
  for (let i = 2; i < n; i++) {
    if (prefixMax[i - 2] > a[i]) return false;
  }

  return true;
};
