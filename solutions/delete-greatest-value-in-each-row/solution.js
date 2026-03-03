// Problem: Delete Greatest Value in Each Row
// LeetCode: https://leetcode.com/problems/delete-greatest-value-in-each-row/
// Language: javascript
// Runtime: 67 ms
// Memory: 44.1 MB
// Submitted: 2023-07-15

var deleteGreatestValue = function (g) {
  let m = g.length;
  let n = g[0].length;

  for (let i = 0; i < m; i++) {
    g[i].sort((a, b) => b - a);
  }

  let s = 0;
  for (let j = 0; j < n; j++) {
    let max = -Infinity;
    for (let i = 0; i < m; i++) {
      max = Math.max(max, g[i][j]);
    }

    s += max;

  }

  return s;
};

