// Problem: Find the City With the Smallest Number of Neighbors at a Threshold Distance
// LeetCode: https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/
// Language: javascript
// Runtime: 170 ms
// Memory: 58.6 MB
// Submitted: 2024-07-26

cl = console.log
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
    let g = new Graph(n)
    g.build(edges)



    let an = []
    for (let u = 0; u < n; u++) {
        let dist = g.dijkstras(u)
        an.push([u, dist.reduce((a, c) => a + (c > distanceThreshold ? 0 : 1), 0)])
    }
    // cl(an)
    an.sort((a, b) => a[1] - b[1] || b[0] - a[0])
    // cl(an)
    return an[0][0]

};




class Graph {
  constructor(n) {
      this.g = Array.from({ length: n }, (_) => []);
      this.in_deg = new Array(n).fill(0)
      this.out_deg = new Array(n).fill(0)
      this.n = n
  }

  build(edges) {
      for (let [u, v, w] of edges) {
          this.g[u].push([v, w])
          this.g[v].push([u, w])
          this.in_deg[v]++
          this.out_deg[u]++
      }
  }

  dijkstras(u) {
      const { PriorityQueue } = require("@datastructures-js/priority-queue");
      const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
      pq.enqueue([u, 0]);
      let distance = new Array(this.n);
      distance[u] = 0;
      while (!pq.isEmpty()) {
          let [u, wsf] = pq.dequeue();

          for (let [v, c] of this.g[u]) {
              let temp = wsf + c;
              if (distance[v] === undefined || temp < distance[v]) {
                  distance[v] = temp;
                  pq.enqueue([v, temp]);
              }
          }
      }

      return distance
  }

}
