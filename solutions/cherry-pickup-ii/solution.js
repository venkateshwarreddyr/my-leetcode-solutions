// Problem: Cherry Pickup II
// LeetCode: https://leetcode.com/problems/cherry-pickup-ii/
// Language: javascript
// Runtime: 126 ms
// Memory: 48.7 MB
// Submitted: 2023-09-13

cl = console.log
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let sides = [
    -1, 0, 1
  ]
  let memo = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(n)))
  const dfs = (i, j, k) => {
    if (i < 0 || j < 0 || k < 0 || i >= m || j >= n || k >= n) return -Infinity;
    if (memo[i][j][k] !== undefined) return memo[i][j][k]
    let sum = 0

    if (j === k) {
      sum += grid[i][j]
    } else {
      sum += (grid[i][j] + grid[i][k])
    }
    if (i === m - 1) return sum
    let max = -Infinity
    for (let x of sides) {
      for (let y of sides) {
        max = Math.max(
          max,
          sum + dfs(
            i + 1, j + x, k + y,
          )
        )
      }
    }
    memo[i][j][k] = max
    return max
  };

  return dfs(0, 0, n - 1)
};
