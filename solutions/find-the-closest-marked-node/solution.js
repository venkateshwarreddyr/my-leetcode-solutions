// Problem: Find the Closest Marked Node
// LeetCode: https://leetcode.com/problems/find-the-closest-marked-node/
// Language: javascript
// Runtime: 140 ms
// Memory: 62 MB
// Submitted: 2024-04-30

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number[]} marked
 * @return {number}
 */
var minimumDistance = function (n, edges, s, marked) {
    let g = new Graph(n)
    g.build(edges)
    let an = Infinity
    let distance = g.dijkstras(s)

    for (let i of marked) {
        an = Math.min(distance[i] ?? Infinity, an)
    }

    return an === Infinity ? -1 : an
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
