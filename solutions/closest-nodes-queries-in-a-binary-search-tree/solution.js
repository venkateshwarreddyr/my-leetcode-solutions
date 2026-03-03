// Problem: Closest Nodes Queries in a Binary Search Tree
// LeetCode: https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/
// Language: javascript
// Runtime: 501 ms
// Memory: 161.5 MB
// Submitted: 2023-10-12

var closestNodes = function (r, qs) {
  function lower_bound_eg(arr, target, L = 0, R = arr.length) {
    while (L < R) {
      let mid = ~~(L / 2 + R / 2);
      arr[mid] < target ? (L = mid + 1) : (R = mid);
    }
    return L;
  }
  function UPPER_BOUND_G(arr, target, L = 0, R = arr.length) {
    while (L < R) {
      let mid = ~~(L / 2 + R / 2);
      arr[mid] <= target ? (L = mid + 1) : (R = mid);
    }
    return L;
  }

  let arr = [];

  function dfs(r) {
    if (!r) return;
    arr.push(r.val);
    dfs(r.left);
    dfs(r.right);
  }

  dfs(r);

  arr.sort((a, b) => a - b);
  let n = arr.length;

  let ans = [];
  for (let q of qs) {
    let i = UPPER_BOUND_G(arr, q);
    let j = lower_bound_eg(arr, q);
    ans.push([i ? arr[i - 1] : -1, j < n ? arr[j] : -1]);
  }
  return ans;
};
