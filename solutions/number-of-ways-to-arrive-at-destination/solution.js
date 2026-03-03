// Problem: Number of Ways to Arrive at Destination
// LeetCode: https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/
// Language: javascript
// Runtime: 175 ms
// Memory: 69.6 MB
// Submitted: 2023-07-30

cl = console.log
mod = 10 ** 9 + 7
var countPaths = function (n, edges) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    let g = Array.from({ length: n }, () => []);

    for (let [u, v, c] of edges) {
        g[u].push([v, c])
        g[v].push([u, c])
    }

    function dijkstraWrapper() {
        function Pair(v, psf, wsf) {
            this.v = v;
            this.psf = psf;
            this.wsf = wsf;
        }

        let distance = Array.from({ length: n }, () => Infinity);
        distance[0] = 0;
        let ccminD2 = Array.from({ length: n }, () => 0) // min dist to each - ccminD2 is 0
        ccminD2[0] = 1 //     count with min distance - count


        function dijkstra(u, t) {

            let pq = new PriorityQueue({ compare: (a, b) => a.wsf - b.wsf });
            pq.enqueue(new Pair(u, u + ",", 0));

            while (!pq.isEmpty()) {
                let p = pq.dequeue();
                let [u, psf, wsf] = [p.v, p.psf, p.wsf];

                for (let [v, c] of g[u]) {
                    let temp = wsf + c;
                    if (temp < distance[v]) {
                        distance[v] = temp;
                        ccminD2[v] = ccminD2[u]
                        pq.enqueue(new Pair(v, psf + v + ",", temp));
                    } else if (temp === distance[v]) {
                        ccminD2[v] += ccminD2[u] % mod
                    }
                }
            }

            return ccminD2[n - 1] % mod
        }



        return dijkstra(0, n - 1);
    }

    return dijkstraWrapper()
};
