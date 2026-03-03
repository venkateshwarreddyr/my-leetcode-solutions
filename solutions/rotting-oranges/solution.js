// Problem: Rotting Oranges
// LeetCode: https://leetcode.com/problems/rotting-oranges/
// Language: javascript
// Runtime: 76 ms
// Memory: 46.2 MB
// Submitted: 2023-07-20

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [];
  let m = grid.length;
  let n = grid[0].length;

  let c = 0;
  let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
  ];
  const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  let cc = 0;
  while (queue.length) {
    let nqueue = [];

    for (let [i, j] of queue) {
      for (let [x, y] of sides) {
        if (!matrixOutOfBounds(i + x, j + y, m, n) && grid[i + x][j + y] === 1) {
          grid[i + x][j + y] = 2;
          nqueue.push([i + x, j + y]);
        }
      }
    }

    if (nqueue.length) cc++;
    queue = nqueue;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return cc;
};

/**
[2,1,1],
[0,1,1],
[1,0,1]

*/


