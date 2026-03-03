// Problem: Minimum Moves to Spread Stones Over Grid
// LeetCode: https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/
// Language: javascript
// Runtime: 2900 ms
// Memory: 65.8 MB
// Submitted: 2023-09-11

let sides = [
  [-1, 0], //   N
  [0, -1], //   W
  [0, 1], //    E
  [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
cl = console.log;
var minimumMoves = function (grid, moves = 0) {
  let m = grid.length;
  let n = grid[0].length;
  let minMoves = Infinity;
  let ob = {};
  let vis = {};
    let good = null
  function dfs(grid) {
    let allOnes = true;
    let gridStr = JSON.stringify(grid);

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 0) {
          allOnes = false;
        }
      }
    }
    if (allOnes) {
        good = gridStr
      return 0;
    }
    if (ob[gridStr] !== undefined) return ob[gridStr];
    if (vis[gridStr]===2) return Infinity;
      vis[gridStr] = vis[gridStr] || 0
      vis[gridStr]++
      // cl(gridStr)
    let min = Infinity;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] > 1) {
          for (let [si, sj] of sides) {
            if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
              grid[i + si][j + sj]++;
              grid[i][j]--;
              min = Math.min(min, 1 + dfs(grid));
              grid[i + si][j + sj]--;
              grid[i][j]++;
            }
          }
        }
      }
    }
    ob[gridStr] = min;
    return min;
  }
  
  return dfs(grid);
};
/**

[0,1,3],
[3,1,0],
[0,1,0]

*/
