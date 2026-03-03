// Problem: Minimum Degree of a Connected Trio in a Graph
// LeetCode: https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/
// Language: javascript
// Runtime: 732 ms
// Memory: 66 MB
// Submitted: 2023-09-06

cl = console.log
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minTrioDegree = function (n, edges) {
  let g = Array.from({ length: n + 1 }, () => new Set());
  let deg = new Array(n + 1).fill(0)
  for (let [u, v] of edges) {
    g[u].add(v);
    g[v].add(u);
    deg[u]++
    deg[v]++
  }
  let min = Infinity
  cl(deg)
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      for (let k = j + 1; k <= n; k++) {

        if (g[i].has(j) && g[i].has(k) && g[j].has(k)) {
          min = Math.min(min, deg[i] + deg[j] + deg[k] - 6)
        }
      }
    }
  }

  return min === Infinity ? -1 : min
};
