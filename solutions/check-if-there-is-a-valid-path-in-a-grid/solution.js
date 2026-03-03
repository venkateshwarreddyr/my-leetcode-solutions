// Problem: Check if There is a Valid Path in a Grid
// LeetCode: https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/
// Language: javascript
// Runtime: 875 ms
// Memory: 173.6 MB
// Submitted: 2023-07-17

// ----------
const inside_bounds = (i, j, m, n) => i >= 0 && j >= 0 && i < m && j < n; // inside bounds
const dirs2 = [
  [0, 1, "r"],
  [1, 0, "b"],
  [-1, 0, "t"],
  [0, -1, "l"],
];
const inside_bounds_adjs2 = (i, j, m, n) => {
  let a = dirs2 //
    .map(([dx, dy, dir]) => [i + dx, j + dy, dir])
    .filter(([ni, nj]) => inside_bounds(ni, nj, m, n));
  // if (!(ni === pi && nj === pj))
  return a;
};
// ----------
//prettier-ignore
function getdir2(val, r, c) {
  switch (val) {
    case 1:
      return [[r, c - 1, 'l'], [r, c + 1, 'r']];
    case 2:
      return [[r - 1, c, 't'], [r + 1, c, 'b']];
    case 3:
      return [[r, c - 1, 'l'], [r + 1, c, 'b']];
    case 4:
      return [[r, c + 1, 'r'], [r + 1, c, 'b']];
    case 5:
      return [[r, c - 1, 'l'], [r - 1, c, 't']];
    case 6:
      return [[r, c + 1, 'r'], [r - 1, c, 't']];
    default:
      throw "unknown err1 ";
  }
}
let opp = {
  l: "r",
  r: "l",
  t: "b",
  b: "t",
};
var hasValidPath = function (g) {
  const m = g.length;
  const n = g[0].length;
  const g2 = Array.from({ length: m }, () => Array(n));

  g2[0][0] = 1;

  function dfs(r, c) {
    if (r === m - 1 && c == n - 1) return true;

    let [[rf, cf, dirf], [rt, ct, dirt]] = getdir2(g[r][c], r, c);
    for (let [r2, c2, dir2] of inside_bounds_adjs2(r, c, m, n)) {
      if (!(dir2 === dirf || dir2 === dirt)) continue;

      let [[nrf, ncf, ndirf], [nrt, nct, ndirt]] = getdir2(g[r2][c2], r2, c2);
      if (!(opp[dir2] === ndirf || opp[dir2] === ndirt)) continue;

      if (g2[r2][c2]) continue;
      g2[r2][c2] = 1;
      if (dfs(r2, c2)) return true;
      g2[r2][c2] = undefined;
    }
    return false;
  }
  return dfs(0, 0);
};
