// Problem: Minimum Time to Visit Disappearing Nodes
// LeetCode: https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/
// Language: javascript
// Runtime: 441 ms
// Memory: 101 MB
// Submitted: 2024-04-16

cl = console.log
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} disappear
 * @return {number[]}
 */
var minimumTime = function(n, edges, disappear) {
     function dijkstraWrapper() {
    let g = Array.from({ length: n }, () => []);
    for (let [u, v, c] of edges) {
      g[u].push([v, c]);
      g[v].push([u, c]);
    }
          
    let distance = new Array(n).fill(-1);
    function dijkstra_(u) {
      const { PriorityQueue } = require("@datastructures-js/priority-queue");
      const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
      pq.enqueue([u, 0]);
      distance[u] = 0;
        let vis = new Array()
      while (!pq.isEmpty()) {
        let [u, wsf] = pq.dequeue();
        if(vis[u]) continue
        vis[u] = true
        for (let [v, c] of g[u]) {
          let temp = wsf + c;
          if ((distance[v] === -1 || temp < distance[v]) && temp < disappear[v]) {
            distance[v] = temp;
            pq.enqueue([v, temp]);
          }
        }
      }
    }
    dijkstra_(0);

         
         return distance
  }
   return dijkstraWrapper()
};
