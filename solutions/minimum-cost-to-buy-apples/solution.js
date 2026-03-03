// Problem: Minimum Cost to Buy Apples
// LeetCode: https://leetcode.com/problems/minimum-cost-to-buy-apples/
// Language: javascript
// Runtime: 355 ms
// Memory: 59.9 MB
// Submitted: 2024-05-02

/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {number[]} appleCost
 * @param {number} k
 * @return {number[]}
 */
var minCost = function (n, roads, appleCost, k) {
    let g = new Graph(n);
    g.build(roads);

    let an = []

    for(let u = 0; u<n;u++) {
        an.push(Math.min(...g.dijkstras(u).map((e, i) => e * (k + 1) + appleCost[i])))
    }

    return an
};

class Graph {
    constructor(n) {
        this.g = Array.from({ length: n }, (_) => []);
        this.n = n
        this.in_deg = new Array(n).fill(0)
        this.out_deg = new Array(n).fill(0)
    }

    build(edges) {
        for (let [u, v, w] of edges) {
            u--
            v--
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
        let distance = new Array(this.n).fill(Infinity);

        distance[u] = 0;
        while (!pq.isEmpty()) {
            let [u, wsf] = pq.dequeue();

            for (let [v, c] of this.g[u]) {
                let temp = wsf + c;
                if (temp < distance[v]) {
                    distance[v] = temp;
                    pq.enqueue([v, temp]);
                }
            }
        }
        return distance
    }



}
