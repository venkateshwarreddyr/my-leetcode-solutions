// Problem: Maximum Number of Fish in a Grid
// LeetCode: https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/
// Language: javascript
// Runtime: 179 ms
// Memory: 53.3 MB
// Submitted: 2023-07-16

var findMaxFish = function (g) {
  let m = g.length;
  let n = g[0].length;

  let MOVES = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let inside = (r, c, m, n) => r >= 0 && c >= 0 && r < m && c < n;
  let inside_bounds_adjs = (r, c, m, n) => {
    let a = MOVES //
      .map(([dx, dy]) => [r + dx, c + dy]) //
      .filter(([ni, nj]) => inside(ni, nj, m, n));
    return a;
  };

  let s; // sum of all adjacent water fishes

  function dfs(r, c) {
    if (!g[r][c]) return;
    s += g[r][c];
    g[r][c] = 0;
    for (let [r2, c2] of inside_bounds_adjs(r, c, m, n))
      if (g[r2][c2]) {
        dfs(r2, c2);
      }
  }

  let ms = 0; // max sum
  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++) {
      s = 0; // start each water with sum 0
      dfs(r, c);
      ms = Math.max(ms, s);
    }
  return ms;
};
