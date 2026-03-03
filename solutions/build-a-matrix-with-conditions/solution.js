// Problem: Build a Matrix With Conditions
// LeetCode: https://leetcode.com/problems/build-a-matrix-with-conditions/
// Language: javascript
// Runtime: 182 ms
// Memory: 64.7 MB
// Submitted: 2023-08-19

var buildMatrix = function (k, top2DownArr, left2RightArr) {
  const search = (a) => {
    const g = new Array(k + 1).fill(0).map(() => new Array())
    const indeg = new Array(k + 1).fill(0)
    const ans = []

    a.forEach(([u, v]) => {
      g[u].push(v)
      indeg[v]++
    })

    while (ans.length < k) {
      const prevLength = ans.length

      for (let i = 1; i <= k; ++i) {
        if (indeg[i] === 0) {
          ans.push(i)
          g[i].forEach((v) => indeg[v]--)
          indeg[i] = -1
        }
      }

      if (prevLength === ans.length) return null
    }

    return ans
  }

  const rowIndexes = search(top2DownArr)
  const colIndexes = search(left2RightArr)

  if (rowIndexes === null || colIndexes === null) return []

  const g = new Array(k).fill(0).map(() => new Array(k).fill(0))
  for (let i = 0; i < rowIndexes.length; ++i) {
    const j = colIndexes.indexOf(rowIndexes[i])
    g[i][j] = rowIndexes[i]
  }
  return g
}
