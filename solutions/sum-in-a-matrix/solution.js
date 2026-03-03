// Problem: Sum in a Matrix
// LeetCode: https://leetcode.com/problems/sum-in-a-matrix/
// Language: javascript
// Runtime: 164 ms
// Memory: 51.9 MB
// Submitted: 2023-07-16

const matrixSum = function (g) {
  const m = g.length
  const n = g[0].length
 
  for (let i = 0; i < m; i++) {
    g[i].sort((a, b) => b - a)
  }
 
  let sum = 0
  for (let c = 0; c < n; c++) {
    let colMax = 0
    for (let i = 0; i < m; i++) {
      colMax = Math.max(colMax, g[i][c])
    }
    sum += colMax
  }
  return sum
}
