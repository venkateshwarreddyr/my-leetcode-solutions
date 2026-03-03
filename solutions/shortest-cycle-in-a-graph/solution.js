// Problem: Shortest Cycle in a Graph
// LeetCode: https://leetcode.com/problems/shortest-cycle-in-a-graph/
// Language: javascript
// Runtime: 417 ms
// Memory: 60 MB
// Submitted: 2023-09-16

var findShortestCycle = function (n, es) {
  let g = Array.from({ length: n }, () => new Array())
  for (let [u, v] of es) {
    g[u].push(v)
    g[v].push(u)
  }

  function bfs(s) {
    let q = [{ u: s, p: -1 }]
    let d = new Array(n).fill(Infinity) // from s
    d[s] = 0

    let mincl = Infinity
    while (q.length) {
      let { u, p } = q.shift()
      for (let v of g[u]) {
        if (v === p) continue
        if (d[u] + 1 >= d[v]) {
          let cl = d[u] + d[v] + 1
          mincl = Math.min(mincl, cl)
        } else {
          d[v] = d[u] + 1
          q.push({ u: v, p: u })
        }
      }
    }
    return mincl
  }

  let mincl = Infinity
  for (let s = 0; s < n; s++) {
    mincl = Math.min(mincl, bfs(s))
  }
  return mincl === Infinity ? -1 : mincl
}
