// Problem: Path with Maximum Gold
// LeetCode: https://leetcode.com/problems/path-with-maximum-gold/
// Language: javascript
// Runtime: 324 ms
// Memory: 42.5 MB
// Submitted: 2023-07-16

var getMaximumGold = function (g) {
  let m = g.length;
  let n = g[0].length;
 
  let max = 0;
  let s = 0;
  const backtrack = (i, j) => {
    if ((i < 0) || (i >= m) || (j < 0) || (j >= n) ||
      g[i][j] == 0 || g[i][j] == -1)
      return;
 
    s += g[i][j];
 
    let save = g[i][j];
    g[i][j] = -1; // visited
 
    max = Math.max(max, s)
    backtrack(i + 1, j);
    backtrack(i - 1, j);
    backtrack(i, j - 1);
    backtrack(i, j + 1);
 
    g[i][j] = save; // un-visited
    s -= g[i][j];
  }
 
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (g[i][j]) {
        backtrack(i, j);
      }
 
  return max;
};
