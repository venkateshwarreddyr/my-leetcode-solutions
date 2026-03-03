// Problem: Reachable Nodes In Subdivided Graph
// LeetCode: https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/
// Language: javascript
// Runtime: 205 ms
// Memory: 71.9 MB
// Submitted: 2023-09-01

var reachableNodes = function (edges, maxMoves, n) {
  let g = [...new Array(n)].map((_) => [])
  for (const [u, v, cost] of edges) {
    g[u].push([v, cost])
    g[v].push([u, cost])
  }

  const seen = new Map()
  let pq = new MaxPriorityQueue({ priority: (u) => u[0] })

  pq.enqueue([maxMoves, 0])

  while (pq.size()) {
    const [moves, u] = pq.dequeue().element

    if (!seen.has(u)) {
      seen.set(u, moves)

      for (const [v, cost] of g[u]) {
        const remainMoves = moves - cost - 1
        if (remainMoves >= 0 && !seen.has(v)) {
          pq.enqueue([remainMoves, v])
        }
      }
    }
  }

  let res = seen.size

  for (const [from, to, k] of edges) {
    res += Math.min((seen.get(from) || 0) + (seen.get(to) || 0), k)
  }

  return res
}

