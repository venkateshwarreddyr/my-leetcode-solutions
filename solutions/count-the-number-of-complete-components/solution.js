// Problem: Count the Number of Complete Components
// LeetCode: https://leetcode.com/problems/count-the-number-of-complete-components/
// Language: javascript
// Runtime: 61 ms
// Memory: 67.2 MB
// Submitted: 2025-08-02

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = new Array(n).fill(1);
        this.componentCount = n;
    }

    build(edges) {
        for (let [u, v] of edges) {
            this.union(u, v);
        }
    }

    union(u, v) {
        const rootU = this.find(u);
        const rootV = this.find(v);

        if (rootU === rootV) return false; // Already connected

        // Union by size - attach smaller tree to larger tree
        if (this.size[rootU] < this.size[rootV]) {
            this.parent[rootU] = rootV;
            this.size[rootV] += this.size[rootU];
        } else {
            this.parent[rootV] = rootU;
            this.size[rootU] += this.size[rootV];
        }

        this.componentCount--;
        return true; // Successfully united
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    // Get size of component containing x
    getSize(x) {
        return this.size[this.find(x)];
    }

    // Check if two elements are connected
    connected(u, v) {
        return this.find(u) === this.find(v);
    }

    // Get maximum component size
    getMaxSize() {
        return Math.max(...this.size);
    }

    // Get number of connected components (optimized)
    getComponentCount() {
        return this.componentCount;
    }

    clone() {
        const cloned = new UnionFind(this.parent.length);
        cloned.parent = [...this.parent];
        cloned.size = [...this.size];
        cloned.componentCount = this.componentCount;
        return cloned;
    }

    print() {
        console.log("Parent:", this.parent);
        console.log("Size:", this.size);
        console.log("Components:", this.componentCount);
    }
}

class Graph {
    constructor(n) {
        this.adjList = Array.from({ length: n }, () => []);
        this.inDeg = new Array(n).fill(0);
        this.outDeg = new Array(n).fill(0);
        this.n = n;
    }

    build(edges, bi = false) {
        this.edges = edges;
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
        const minWeightPath = Array.from({ length: this.n }, () =>
            new Array(this.n).fill(Infinity)
        );

        // Initialize direct edges and self-loops
        for (let u = 0; u < this.n; u++) {
            minWeightPath[u][u] = 0;
            for (let [v, w] of this.adjList[u]) {
                minWeightPath[u][v] = w;
            }
        }

        // Core Floyd-Warshall logic
        for (let middle = 0; middle < this.n; middle++) {
            for (let from = 0; from < this.n; from++) {
                if (minWeightPath[from][middle] === Infinity) continue;
                for (let to = 0; to < this.n; to++) {
                    if (minWeightPath[middle][to] === Infinity) continue;
                    minWeightPath[from][to] = Math.min(
                        minWeightPath[from][to],
                        minWeightPath[from][middle] + minWeightPath[middle][to]
                    );
                }
            }
        }

        // Optional: Detect negative weight cycles
        for (let i = 0; i < this.n; i++) {
            if (minWeightPath[i][i] < 0) {
                throw new Error("Negative weight cycle detected");
            }
        }

        return minWeightPath;
    }

    kruskals() {
        const edges = [...this.edges];

        edges.sort((a, b) => a[2] - b[2]);
        const uf = new UnionFind(this.n);
        let mst = [];
        let totalWeight = 0;

        for (let [u, v, w] of edges) {
            if (uf.union(u, v)) {
                mst.push([u, v, w]);
                totalWeight += w;
                if (mst.length === this.n - 1) break;
            }
        }

        return { edges: mst, totalWeight };
    }

    prims() {
        const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
        const pq = new MinPriorityQueue((a) => a[2]);
        let mst = [];
        let totalWeight = 0;
        let inMST = new Array(this.n).fill(false);
        let startIndex = 0;
        inMST[startIndex] = true;

        for (let [v, w] of this.adjList[startIndex]) {
            if (!inMST[v]) {
                pq.enqueue([startIndex, v, w]);
            }
        }

        while (!pq.isEmpty() && mst.length < this.n - 1) {
            let [u, v, weight] = pq.dequeue();
            if (inMST[v]) continue;

            inMST[v] = true;
            totalWeight += weight;
            mst.push([u, v, weight]);
            for (let [nextV, nextW] of this.adjList[v]) {
                if (inMST[nextV]) continue;
                pq.enqueue([v, nextV, nextW]);
            }
        }

        return { edges: mst, totalWeight };
    }

    kosaraju() {
        let visited = new Array(this.n).fill(false)
        let L = []
        const visit = (u) => {
            if (visited[u]) return
            visited[u] = true
            for (let [v] of this.adjList[u]) {
                visit(v)
            }

            L.unshift(u)
        }

        for (let u = 0; u < this.n; u++) {
            visit(u)
        }

        const transpose = Array.from({ length: this.n }, () => []);
        for (let u = 0; u < this.n; u++) {
            for (let [v] of this.adjList[u]) {
                transpose[v].push([u]);
            }
        }

        let assigned = new Array(this.n).fill(null)
        const assign = (u, root) => {
            if (assigned[u] !== null) return
            assigned[u] = root
            for (let [v] of transpose[u]) {
                assign(v, root)
            }

        }

        for (let u of L) {
            assign(u, u)
        }

        return assigned
    }
}

var countCompleteComponents = function (n, edges) {

    const g = new Graph(n)
    g.build(edges, true)

    const scc = g.kosaraju()
    let newAdjList = [...new Array(n)].map((_, i) => i);

    let ob = {}
    for (let u = 0; u < n; u++) {
        let p = scc[u]
        ob[p] = ob[p] ?? []
        ob[p].push(u)
    }

    let cc = 0

    for (let values of Object.values(ob)) {
        if (values.every(u => g.adjList[u].length === values.length - 1)) {
            cc++
        }
    }

    return cc;

};
