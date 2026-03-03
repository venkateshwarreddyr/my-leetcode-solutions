// Problem: Merge Sorted Array
// LeetCode: https://leetcode.com/problems/merge-sorted-array/
// Language: javascript
// Runtime: 53 ms
// Memory: 42.1 MB
// Submitted: 2024-01-18

var merge = function (a, m, b, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (a[i] > b[j]) {
      a[k--] = a[i--];
    } else {
      a[k--] = b[j--];
    }
  }

  while (j >= 0) {
    a[k--] = b[j--];
  }
};
