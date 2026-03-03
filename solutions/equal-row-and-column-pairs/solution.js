// Problem: Equal Row and Column Pairs
// LeetCode: https://leetcode.com/problems/equal-row-and-column-pairs/
// Language: javascript
// Runtime: 239 ms
// Memory: 46.8 MB
// Submitted: 2023-07-15


const equalPairs = function (g) {
  const m = g.length
  const n = g[0].length

  let cc = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let good = 1
      for (let x = 0; x < m && x < n; x++) {
        if (g[x][j] !== g[i][x]) {
          good = 0
        }
      }
      if (good) cc++
    }
  }
  return cc
}
