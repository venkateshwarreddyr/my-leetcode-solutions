// Problem: Reshape the Matrix
// LeetCode: https://leetcode.com/problems/reshape-the-matrix/
// Language: javascript
// Runtime: 77 ms
// Memory: 45.8 MB
// Submitted: 2023-07-16

var matrixReshape = function (g, r, c) {
  let m = g.length
  let n = g[0].length
 
  if (m * n !== r * c) return g
 
  let a = []
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      a.push(g[i][j])
    }
 
  let k = 0
  let g2 = new Array(r).fill().map(() => new Array(c))
  for (let i = 0; i < r; i++)
    for (let j = 0; j < c; j++) {
      g2[i][j] = a[k++]
    }
  return g2
};
