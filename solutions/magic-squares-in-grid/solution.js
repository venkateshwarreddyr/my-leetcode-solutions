// Problem: Magic Squares In Grid
// LeetCode: https://leetcode.com/problems/magic-squares-in-grid/
// Language: javascript
// Runtime: 3 ms
// Memory: 56.3 MB
// Submitted: 2025-12-30

var numMagicSquaresInside = function (g) {
  function grid_between1and9(r, c) {
    let set = new Set()
    for (let i = r - 1; i <= r + 1; i++) {
      for (let j = c - 1; j <= c + 1; j++) {
        if (set.has(g[i][j])) return false // not distinct ele
        if (g[i][j] < 1 || g[i][j] > 9) return false // not in 1 to 9
        set.add(g[i][j])
      }
    }
    return true
  }

  let x, y, z
  let s = 0

  function rowSum(g, r, c) {
    r--
      ;[x, y, z] = [g[r][c - 1], g[r][c], g[r][c + 1]]
    s = x + y + z

    r++
      ;[x, y, z] = [g[r][c - 1], g[r][c], g[r][c + 1]]
    if (s != x + y + z) return false

    r++
      ;[x, y, z] = [g[r][c - 1], g[r][c], g[r][c + 1]]
    if (s != x + y + z) return false

    return true
  }

  function colSum(g, r, c) {
    c--
      ;[x, y, z] = [g[r - 1][c], g[r][c], g[r + 1][c]]
    if (s != x + y + z) return false

    c++
      ;[x, y, z] = [g[r - 1][c], g[r][c], g[r + 1][c]]
    if (s != x + y + z) return false

    c++
      ;[x, y, z] = [g[r - 1][c], g[r][c], g[r + 1][c]]
    if (s != x + y + z) return false

    return true
  }

  function diaSum(g, r, c) {
    [x, y, z] = [g[r - 1][c - 1], g[r][c], g[r + 1][c + 1]]
    return s == x + y + z
  }

  function dia2Sum(g, r, c) {
    [x, y, z] = [g[r - 1][c + 1], g[r][c], g[r + 1][c - 1]]
    return s == x + y + z
  }

  function isMagicSquare(i, j) {
    if (
      grid_between1and9(i, j) && //
      rowSum(g, i, j) &&
      colSum(g, i, j) &&
      diaSum(g, i, j) &&
      dia2Sum(g, i, j)
    )
      return true
    return false
  }

  let m = g.length // > =1
  let n = g[0].length // >= 1

  if (m < 3) return 0
  if (n < 3) return 0

  let cc = 0
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      s = 0 // reset s
      if (isMagicSquare(i, j)) cc++
    }
  }
  return cc
}
