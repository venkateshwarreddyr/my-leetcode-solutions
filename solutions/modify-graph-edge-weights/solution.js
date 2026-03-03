// Problem: Modify Graph Edge Weights
// LeetCode: https://leetcode.com/problems/modify-graph-edge-weights/
// Language: javascript
// Runtime: 659 ms
// Memory: 81.9 MB
// Submitted: 2023-09-18

cl = console.log
var modifiedGraphEdges = function (n, edges, source, destination, target) {
    let g1 = new UdWGraph(n, edges.filter((e) => e[2] !== -1))
    let d = g1.dijkstra(source, destination)
  const kMax = 2000000000;

    if (d === target) {
        edges.forEach(e => {
            if (e[2] === -1) {
                e[2] = kMax
            }
        })

        return edges
    }
    if (d < target) {
        return []
    }

    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        if (w !== -1) {
            continue
        }
        edges[i][2] = 1
        g1.addEdge(u, v, 1)
        let d1 = g1.dijkstra(source, destination)
        if (d1 <= target) {
            edges[i][2] += target - d1
            for (let j = i + 1; j < edges.length; j++) {
                if (edges[j][2] === -1) {
                    edges[j][2] = kMax;
                }
            }
            return edges
        }
    }
    return []
};

class UdWGraph {
    constructor(n, edges) {
        this.g = Array.from({ length: n }, () => new Array());
        this.n = n
        for (let [u, v, w] of edges) {
            this.g[u].push([v, w]);
            this.g[v].push([u, w]);
        }
    }

    addEdge(u, v, w) {
        this.g[u].push([v, w]);
        this.g[v].push([u, w]);
    }

    dijkstra(s, d) {
        let distance = new Array(this.n).fill(Infinity);
        const dijkstra_ = (u) => {
            const { PriorityQueue } = require("@datastructures-js/priority-queue");
            const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
            pq.enqueue([u, 0]);
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
        }
        dijkstra_(s);

        return distance[d]
    }

    dfsfn(s, a) {
        function merge(s, d) {
            for (let i = 0; i < 26; i++) {
                d[i] += s[i]
            }
        }
        let vis = new Set();
        const dfs = (u) => {
            vis.add(u);
            for (let [v, w] of this.g[u]) {
                if (vis.has(v)) continue
                merge(a[u], a[v])
                a[v][w]++
                dfs(v)
            }
            vis.delete(u);
        }
        dfs(s)
    }

}
