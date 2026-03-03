// Problem: Network Delay Time
// LeetCode: https://leetcode.com/problems/network-delay-time/
// Language: javascript
// Runtime: 102 ms
// Memory: 63.8 MB
// Submitted: 2025-08-02

class Graph {
    constructor(n) {
        this.adjList = Array.from({ length: n }, () => []);
        this.inDeg = new Array(n).fill(0);
        this.outDeg = new Array(n).fill(0);
        this.n = n;
    }

    build(edges, bi = false) {
        for (let [u, v, w = 1] of edges) {
            this.adjList[u].push([v, w]);
            this.inDeg[v]++;
            this.outDeg[u]++;
            if (bi) {
                this.adjList[v].push([u, w]);
                this.inDeg[u]++;
                this.outDeg[v]++;
            }
        }
    }

    dijkstras(u) {
        const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
        const pq = new MinPriorityQueue((a) => a[1]);
        const weightFromStartNodeToEachNode = new Array(this.n).fill(Infinity);
        weightFromStartNodeToEachNode[u] = 0;
        pq.enqueue([u, 0]);

        while (!pq.isEmpty()) {
            const [u, weightSoFar] = pq.dequeue();

            if (weightSoFar > weightFromStartNodeToEachNode[u]) continue;

            for (let [v, w] of this.adjList[u]) {
                const weight = w + weightSoFar;

                if (weightFromStartNodeToEachNode[v] > weight) {
                    weightFromStartNodeToEachNode[v] = weight;
                    pq.enqueue([v, weight]);
                }
            }
        }

        return weightFromStartNodeToEachNode;
    }

    bellmenFord(u) {
        const weightFromStartNodeToEachNode = new Array(this.n).fill(Infinity);
        weightFromStartNodeToEachNode[u] = 0;

        for (let i = 0; i < this.n - 1; i++) {
            for (let u = 0; u < this.n; u++) {
                for (let [v, w] of this.adjList[u]) {
                    const weight = w + weightFromStartNodeToEachNode[u];

                    if (weightFromStartNodeToEachNode[v] > weight) {
                        weightFromStartNodeToEachNode[v] = weight;
                    }
                }
            }
        }

        for (let u = 0; u < this.n; u++) {
            for (let [v, w] of this.adjList[u]) {
                const weight = w + weightFromStartNodeToEachNode[u];
                if (weight < weightFromStartNodeToEachNode[v]) {
                    throw new Error("Negative weight cycle detected");
                }
            }
        }

        return weightFromStartNodeToEachNode;
    }

    floydsWarshall() {
        let minWeightPath = Array.from({ length: this.n }, () => new Array(this.n).fill(Infinity));

        for (let u = 0; u < this.n; u++) {
            minWeightPath[u][u] = 0
            for (let [v, w] of this.adjList[u]) {
                minWeightPath[u][v] = w
            }
        }

        for (let middle = 0; middle < this.n; middle++) {
            for (let from = 0; from < this.n; from++) {
                if (minWeightPath[from][middle] === Infinity) continue;
                for (let to = 0; to < this.n; to++) {
                    if (from === to) continue
                    if (minWeightPath[middle][to] === Infinity) continue
                    minWeightPath[from][to] = Math.min(
                        minWeightPath[from][to],
                        minWeightPath[from][middle] + minWeightPath[middle][to]
                    );
                }
            }
        }

        return minWeightPath
    }
}

var networkDelayTime = function (times, n, k) {
    let g = new Graph(n + 1);

    g.build(times)

    let timeArr = g.floydsWarshall(k)

    // console.log(timeArr)
    let max = Math.max(...timeArr[k].slice(1))
    return max === Infinity ? -1 : max
};
