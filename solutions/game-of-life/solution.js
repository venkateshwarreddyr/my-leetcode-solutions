// Problem: Game of Life
// LeetCode: https://leetcode.com/problems/game-of-life/
// Language: javascript
// Runtime: 67 ms
// Memory: 45 MB
// Submitted: 2023-07-17

var gameOfLife = function (g) {
  let m = g.length;
  let n = g[0].length;

  let MOVES = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ]; // prettier-ignore

  let inside = (r, c, m, n) => r >= 0 && c >= 0 && r < m && c < n;
  let g2 = Array.from({ length: m }, () => Array(n).fill(0));

  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++) {
      let cc = 0;

      for (let [dx, dy] of MOVES) {
        let nr = r + dx; // new Row
        let nc = c + dy;

        if (!inside(nr, nc, m, n)) {
          continue;
        }
        if (g[nr][nc] === 1) {
          cc++;
        }
      }

      if (g[r][c] === 1) {
        if (cc < 2) {
          g2[r][c] = 0;
        } else if (cc === 2 || cc === 3) {
          g2[r][c] = 1;
        } else if (cc > 3) {
          g2[r][c] = 0;
        }
      } else {
        if (cc === 3) {
          g2[r][c] = 1;
        }
      }
    }

  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++) {
      g[r][c] = g2[r][c];
    }
};
