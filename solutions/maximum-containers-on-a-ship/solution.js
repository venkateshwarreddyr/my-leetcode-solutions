// Problem: Maximum Containers on a Ship
// LeetCode: https://leetcode.com/problems/maximum-containers-on-a-ship/
// Language: javascript
// Runtime: 72 ms
// Memory: 54.5 MB
// Submitted: 2025-08-03

var maxContainers = function (n, cw, maxw) {
  let totw = 0
  let cc = 0
  for (let cell = 1; cell <= n * n; cell++) {
    totw += cw
    if (totw <= maxw) {
      cc++
    } else {
      break
    }
  }
  return cc
};

