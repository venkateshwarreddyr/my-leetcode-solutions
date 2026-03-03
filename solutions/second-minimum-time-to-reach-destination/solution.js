// Problem: Second Minimum Time to Reach Destination
// LeetCode: https://leetcode.com/problems/second-minimum-time-to-reach-destination/
// Language: javascript
// Runtime: 1771 ms
// Memory: 80.4 MB
// Submitted: 2024-07-28

cl = console.log
var secondMinimum = function (n, edges, time, change) {

    function dijkstraWrapper() {
        let g = Array.from({ length: n + 1 }, () => []);
        for (let [u, v] of edges) {
            g[u].push(v);
            g[v].push(u);
        }
        let first = new Array(n + 1).fill(Infinity);
        let second = new Array(n + 1).fill(Infinity);
        let set = new Set()

        function dijkstra_(u) {
            const { PriorityQueue } = require("@datastructures-js/priority-queue");
            const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
            pq.enqueue([u, 0, change]);
            first[u] = 0;

            while (!pq.isEmpty()) {
                let [u, curr] = pq.dequeue();
                curr += time

                let leave = curr
                if (Math.floor(curr / change) % 2 == 1) {
                    leave += (change - (curr % change))
                }
                cl({ leave, curr })
                for (let v of g[u]) {
                    if (second[v] <= curr) continue
                    if (first[v] === curr) continue

                    if (first[v] > curr) {
                        second[v] = first[v]
                        first[v] = curr
                    } else {
                        second[v] = curr
                    }
                    pq.enqueue([v, leave]);
                }
            }
        }
        dijkstra_(1);
        return second[n]
    }
    return dijkstraWrapper();

};
