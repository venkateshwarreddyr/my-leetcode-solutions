// Problem: Number of Restricted Paths From First to Last Node
// LeetCode: https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/
// Language: javascript
// Runtime: 368 ms
// Memory: 122.3 MB
// Submitted: 2023-09-05

cl = console.log
mod = 10 ** 9 + 7
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function (n, edges) {
    let g = Array.from({ length: n + 1 }, () => []);
    for (let [u, v, c] of edges) {
        g[u].push([v, c]);
        g[v].push([u, c]);
    }
    function dijkstraWrapper() {
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
        dijkstra_(n);
        cl(distance)
        return distance
    }
    let distance = dijkstraWrapper()
    function dfsWrapper() {
        let dp = new Array(n + 1)
        let visinpath = new Array(n + 1)
        function dfs_(u) {
            if (n === u) return 1
            if (dp[u] !== undefined) return dp[u]
            visinpath[u] = 1
            let sum = 0
            for (let [v] of g[u]) {
                if (visinpath[v]) continue
                if (distance[u] > distance[v]) {
                    sum += dfs_(v);
                }
            }

            dp[u] = sum % mod
            visinpath[u] = 0
            return sum
        }
        dfs_(1)

        return dp[1]
    }
    return dfsWrapper()
};
