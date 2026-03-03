// Problem: Count the Number of Houses at a Certain Distance I
// LeetCode: https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/
// Language: javascript
// Runtime: 689 ms
// Memory: 61.8 MB
// Submitted: 2024-01-21

cl = console.log
var countOfPairs = function(n, x, y) {
      function dijkstraWrapper() {
    let g = Array.from({ length: n + 1 }, () => []);
    for (let i=1;i<n;i++) {
        let u = i
        let v = i+1
      g[u].push([v, 1]);
      g[v].push([u, 1]);
    }
      if(x!==y) {
          g[x].push([y, 1])
          g[y].push([x, 1])
      }
          let an = new Array(n+1).fill(0)
             for (let i=1;i<=n;i++) {
    let distance = new Array(n + 1);
    function dijkstra_(u) {
      const { PriorityQueue } = require("@datastructures-js/priority-queue");
      const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
      pq.enqueue([u, 0]);
      distance[u] = 0;

      while (!pq.isEmpty()) {
        let [u, wsf] = pq.dequeue();

        for (let [v, c] of g[u]) {
          let temp = wsf + c;
          if (distance[v] === undefined || temp < distance[v]) {
            distance[v] = temp;
            pq.enqueue([v, temp]);
          }
        }
      }
    }
       
    dijkstra_(i);
                 for(let e of distance) {
                     an[e]++
                 }
    cl(distance);
          }
          
          an.shift()
          console.log(an)
          return an
  }
return dijkstraWrapper()
};
