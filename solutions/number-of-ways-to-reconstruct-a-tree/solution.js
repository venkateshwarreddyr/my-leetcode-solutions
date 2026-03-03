// Problem: Number Of Ways To Reconstruct A Tree
// LeetCode: https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/
// Language: javascript
// Runtime: 2961 ms
// Memory: 128.6 MB
// Submitted: 2023-09-22

// cl = console.log
var checkWays = function (edges) {
  let g = new Array()
  let f = new Array()
  for (const [u, v] of edges) {
    if (!g[u]) g[u] = []
    if (!g[v]) g[v] = []
    g[u].push(v)
    g[v].push(u)

    f[u] = (f[u] || 0) + 1
    f[v] = (f[v] || 0) + 1
  }

  let vertices = []
  for (let i = 0; i < g.length; i++) {
    if (f[i] !== undefined) {
      vertices.push(i)
    }
  }
  vertices.sort((a, b) => f[b] - f[a])

  let order = new Map()
  let newGraph = []

  order.set(vertices[0], 0)
  newGraph[vertices[0]] = -1

  // cl(f)
  for (let i = 1; i < vertices.length; ++i) {
    let u = vertices[i]
    order.set(u, i)

    let ancestorNode = -1
    for (const v of g[u]) {
      if (f[v] > f[u]) {
        if (!order.has(v)) return 0 // done
      }
      if (f[v] >= f[u] && order.has(v)) {
        if (ancestorNode === -1 || order.get(v) > order.get(ancestorNode)) {
          ancestorNode = v
        }
      }
    }
    if (ancestorNode === -1) return 0 // done


    newGraph[u] = ancestorNode
  }

  // cl(newGraph)
  // cl(order)
  let edges2 = []
  for (const [u, _] of order) {
    let p = newGraph[u]
    while (p !== -1) {
      if (u < p) {
        edges2.push([u, p])
      } else {
        edges2.push([p, u])
      }
      p = newGraph[p]
    }
  }

  if (JSON.stringify(edges.sort()) !== JSON.stringify(edges2.sort())) return 0
  for (let i = 1; i < vertices.length; ++i) {
    let u = vertices[i]
    for (const v of g[u]) {
      if (f[v] === f[u]) {
        return 2
      }
    }
  }
  return 1

}
