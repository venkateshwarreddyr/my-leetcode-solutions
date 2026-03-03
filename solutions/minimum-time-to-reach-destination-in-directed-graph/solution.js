// Problem: Minimum Time to Reach Destination in Directed Graph
// LeetCode: https://leetcode.com/problems/minimum-time-to-reach-destination-in-directed-graph/
// Language: javascript
// Runtime: 293 ms
// Memory: 119.8 MB
// Submitted: 2025-07-30

class Graph {
  constructor(n) {
    this.n = n;
    this.adjList = Array.from({ length: n }, () => []);
    this.inDeg = new Array(n).fill(0);
    this.outDeg = new Array(n).fill(0);
  }

  build(edges) {
    for (let [u, v, start, end] of edges) {
      this.adjList[u].push([v, start, end]);
      this.inDeg[v]++;
      this.outDeg[u]++;
    }
  }

  dijkstras(s) {
    const pq = new MinPriorityQueue(a => a[1]);
    const distance = new Array(this.n).fill(Infinity);
    pq.enqueue([s, 0]);
    distance[s] = 0;
    while (!pq.isEmpty()) {
      let [u, tsf] = pq.dequeue();
      if (u === this.n - 1) break;
      for (let [v, start, end] of this.adjList[u]) {
        if (tsf <= end) {
          let tsf_with_wait = tsf
          if (tsf_with_wait < start) tsf_with_wait = start
          if (tsf_with_wait + 1 < distance[v]) {
            distance[v] = tsf_with_wait + 1;
            pq.enqueue([v, tsf_with_wait + 1]);
          }
        }
      }
    }
    return distance;
  }
}

var minTime = function (n, edges) {
  let g = new Graph(n);
  g.build(edges);
  let d = g.dijkstras(0);
  return d[n - 1] === Infinity ? -1 : d[n - 1];
};

// export { minTime };
