// Problem: Minimum Weighted Subgraph With the Required Paths
// LeetCode: https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/
// Language: javascript
// Runtime: 687 ms
// Memory: 164 MB
// Submitted: 2023-08-31

cl = console.log
var minimumWeight = function (n, edges, src1, src2, dest) {


  function dijkstraWrapper() {
    let g = Array.from({ length: n }, () => Array())
    let rg = Array.from({ length: n }, () => Array())
    for (let [u, v, c] of edges) {
      g[u].push([v, c])
      rg[v].push([u, c])
    }

    function dijkstra_(u, g) {
      const { PriorityQueue } = require("@datastructures-js/priority-queue");
      const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] }); // increasing
      let dp = new Array(n).fill(Infinity);
      let visited = new Array(n).fill(false);
      dp[u] = 0;
      pq.enqueue([u, 0]);

      while (!pq.isEmpty()) {
        let [u, w] = pq.dequeue();
        if (visited[u] || w > dp[u]) continue;
        visited[u] = true
        for (let [v, c] of g[u]) {
          let temp = w + c;
          if (temp < dp[v]) {
            dp[v] = temp;
            pq.enqueue([v, temp]);
          }
        }
      }

      return dp
    }


    let dpsrc1 = dijkstra_(src1, g);
    let dpsrc2 = dijkstra_(src2, g);
    let dpdest = dijkstra_(dest, rg);

    let an = Infinity
    for (let i = 0; i < n; i++) {
      an = Math.min(an,
        dpsrc1[i] +
        dpsrc2[i] +
        dpdest[i]
      )
    }
    return an === Infinity ? -1 : an;
  }

  return dijkstraWrapper()
};

/**
        a       b
            c


 */
