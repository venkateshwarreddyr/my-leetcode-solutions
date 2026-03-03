// Problem: Minimize Maximum Component Cost
// LeetCode: https://leetcode.com/problems/minimize-maximum-component-cost/
// Language: javascript
// Runtime: 1038 ms
// Memory: 154.8 MB
// Submitted: 2026-01-10

class UnionFind {
    constructor(n) {
        if (!Number.isInteger(n) || n <= 0) {
            throw new Error("Size must be a positive integer");
        }

        this.n = n;
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.size = new Array(n).fill(1);
        this.count = n;
    }

    // Time Complexity: O(α(n)) - nearly constant due to path compression
    find(x) {
        this._validateIndex(x);

        let root = x;
        while (root !== this.parent[root]) {
            root = this.parent[root];
        }

        while (x !== root) {
            const next = this.parent[x];
            this.parent[x] = root;
            x = next;
        }

        return root;
    }

    // Time Complexity: O(α(n)) - nearly constant due to optimized union by rank
    union(x, y) {
        this._validateIndex(x);
        this._validateIndex(y);

        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return false;
        }

        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
            this.size[rootY] += this.size[rootX];
            this.size[rootX] = 0;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
            this.size[rootX] += this.size[rootY];
            this.size[rootY] = 0;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
            this.size[rootX] += this.size[rootY];
            this.size[rootY] = 0;
        }

        this.count--;
        return true;
    }

    // Time Complexity: O(α(n)) - nearly constant
    connected(x, y) {
        this._validateIndex(x);
        this._validateIndex(y);
        return this.find(x) === this.find(y);
    }

    // Time Complexity: O(1) - constant time
    components() {
        return this.count;
    }

    // Time Complexity: O(α(n)) - nearly constant
    componentSize(x) {
        this._validateIndex(x);
        const root = this.find(x);
        return this.size[root];
    }

    // Time Complexity: O(n * α(n)) - linear with path compression overhead
    getComponent(x) {
        this._validateIndex(x);
        const root = this.find(x);
        const component = [];

        for (let i = 0; i < this.n; i++) {
            if (this.find(i) === root) {
                component.push(i);
            }
        }

        return component;
    }

    // Time Complexity: O(n * α(n)) - linear with path compression overhead
    allComponents() {
        const components = new Map();

        for (let i = 0; i < this.n; i++) {
            const root = this.find(i);
            if (!components.has(root)) {
                components.set(root, []);
            }
            components.get(root).push(i);
        }

        return Array.from(components.values());
    }

    // Time Complexity: O(1) - constant time
    fullyConnected() {
        return this.count === 1;
    }

    // Time Complexity: O(n) - linear scan of all elements
    maxComponentSize() {
        let max = 0;
        for (let i = 0; i < this.n; i++) {
            if (this.parent[i] === i) {
                max = Math.max(max, this.size[i]);
            }
        }
        return max;
    }

    // Time Complexity: O(n) - linear initialization
    reset() {
        for (let i = 0; i < this.n; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
            this.size[i] = 1;
        }
        this.count = this.n;
    }

    // Time Complexity: O(n * α(n)) - linear with path compression overhead
    toString() {
        const components = this.allComponents();
        return `UnionFind(${this.n} elements, ${this.count
            } components): ${components
                .map((comp) => `[${comp.join(", ")}]`)
                .join(", ")}`;
    }

    _validateIndex(x) {
        if (!Number.isInteger(x) || x < 0 || x >= this.n) {
            throw new Error(`Index ${x} is out of bounds [0, ${this.n - 1}]`);
        }
    }
}

class MinHeap_ {
    constructor(comparator) {
        this._compare = comparator || ((a, b) => a - b);
        this._heap = [];
    }

    size() {
        // O(1)
        return this._heap.length;
    }

    isEmpty() {
        // O(1)
        return this._heap.length === 0;
    }

    peek() {
        // O(1)
        return this.isEmpty() ? null : this._heap[0];
    }

    enqueue(value) {
        // O(log n)
        this._heap.push(value);
        this._siftUp(this._heap.length - 1);
        return this;
    }

    dequeue() {
        // O(log n)
        if (this.isEmpty()) return null;
        this._swap(0, this._heap.length - 1);
        const removed = this._heap.pop();
        if (!this.isEmpty()) this._siftDown(0);
        return removed;
    }

    clear() {
        // O(1)
        this._heap = [];
        return this;
    }

    toArray() {
        // O(n)
        return this._heap.slice();
    }

    /* private helpers */

    _parent(i) {
        return Math.floor((i - 1) / 2);
    } // O(1)
    _left(i) {
        return 2 * i + 1;
    } // O(1)
    _right(i) {
        return 2 * i + 2;
    } // O(1)
    _swap(i, j) {
        const t = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = t;
    } // O(1)

    _siftUp(idx) {
        // O(log n)
        let parent = this._parent(idx);
        while (idx > 0 && this._compare(this._heap[idx], this._heap[parent]) < 0) {
            this._swap(idx, parent);
            idx = parent;
            parent = this._parent(idx);
        }
    }

    _siftDown(idx) {
        // O(log n)
        const size = this._heap.length;
        while (true) {
            const left = this._left(idx);
            const right = this._right(idx);
            let smallest = idx;

            if (
                left < size &&
                this._compare(this._heap[left], this._heap[smallest]) < 0
            ) {
                smallest = left;
            }
            if (
                right < size &&
                this._compare(this._heap[right], this._heap[smallest]) < 0
            ) {
                smallest = right;
            }
            if (smallest === idx) break;
            this._swap(idx, smallest);
            idx = smallest;
        }
    }
}

class Graph {
    constructor(n) {
        this.n = n;
        this.adjList = Array.from({ length: n }, () => []);
        this.revList = Array.from({ length: n }, () => []);
        this.inDeg = new Array(n).fill(0);
        this.outDeg = new Array(n).fill(0);
    }

    build(edges, bi = false) {
        const { adjList, revList, inDeg, outDeg } = this;
        this.edges = edges;

        for (let [u, v, w = 1] of edges) {
            adjList[u].push([v, w]);
            revList[v].push([u, w]);

            outDeg[u]++;
            inDeg[v]++;

            if (bi) {
                adjList[v].push([u, w]);
                revList[u].push([v, w]);

                outDeg[v]++;
                inDeg[u]++;
            }
        }
    }

    // Time Complexity: O((V + E) log V) with binary heap
    dijkstra(startNode) {
        // Basic validation
        if (startNode < 0 || startNode >= this.n || !this.adjList[startNode]) {
            throw new Error("Invalid start node");
        }

        // Optional: Check for negative weights (run once before calling if needed)
        for (let i = 0; i < this.n; i++) {
            for (const [, weight] of this.adjList[i]) {
                if (weight < 0)
                    throw new Error(
                        "Negative weights detected; use Bellman-Ford instead"
                    );
            }
        }

        const priorityQueue = new MinHeap_((a, b) => a[1] - b[1]);
        const distances = new Array(this.n).fill(Infinity);
        const predecessors = new Array(this.n).fill(null);
        const visited = new Array(this.n).fill(false);

        distances[startNode] = 0;
        priorityQueue.enqueue([startNode, 0]);

        while (!priorityQueue.isEmpty()) {
            const [currentNode, currentDistance] = priorityQueue.dequeue();

            // Skip if already visited (finalized with shortest path)
            if (visited[currentNode]) continue;

            // Finalize this node
            visited[currentNode] = true;

            // Relax edges to neighbors
            for (const [neighborNode, edgeWeight] of this.adjList[currentNode]) {
                // Skip visited neighbors to avoid unnecessary work
                if (visited[neighborNode]) continue;

                const newDist = currentDistance + edgeWeight;

                // Update if a shorter path is found
                if (newDist < distances[neighborNode]) {
                    distances[neighborNode] = newDist;
                    predecessors[neighborNode] = currentNode;
                    // Enqueue updated distance (may insert duplicates, but visited will handle skips)
                    priorityQueue.enqueue([neighborNode, newDist]);
                }
            }
        }

        return { distances, predecessors };
    }

    // Time Complexity (V * E)
    bellmanFord(startNode) {
        const { n, adjList } = this;

        const distance = new Array(n).fill(Infinity);
        distance[startNode] = 0;

        const predecessor = new Array(vertexCount);

        for (let i = 0; i < n - 1; i++) {
            let updated = false;
            for (const u = 0; u < n; u++) {
                if (distance[u] === Infinity) continue; // skip unreachable nodes

                for (const [v, w] of this.adjList[u]) {
                    const newDist = distance[u] + w;
                    if (newDist < distance[v]) {
                        distance[v] = newDist;
                        predecessor[v] = u; // track path
                        updated = true;
                    }
                }
            }

            if (!updated) break;
        }

        // Check for negative weight cycles
        for (let u = 0; u < vertexCount; u++) {
            if (distance[u] === Infinity) continue;
            for (const [v, weight] of adjList[u]) {
                if (distance[u] + weight < distance[v]) {
                    throw new Error("Graph contains a negative weight cycle");
                }
            }
        }

        return { distance, predecessor };
    }

    // Time Complexity: O(n³)
    // https://leetcode.com/problems/course-schedule/description/
    floydWarshall() {
        const { n, adjList } = this;

        const distance = Array.from({ length: n }, () =>
            new Array(n).fill(Infinity)
        );

        for (const u = 0; u < n; u++) {
            distance[u][u] = 0;
            for (const [v, w] of adjList[u]) {
                distance[u][v] = w;
            }
        }

        for (const middle = 0; middle < n; middle++) {
            for (const u = 0; u < n; u++) {
                if (distance[u][middle] === Infinity) continue;
                for (const v = 0; v < n; v++) {
                    const newDist = distance[u][middle] + distance[middle][v];

                    if (newDist < distance[u][v]) {
                        distance[u][v] = newDist;
                    }
                }
            }
        }

        return distance;
    }

    // Time Complexity: O(V + E)
    hasCycleDirected() {
        const { n, adjList } = this;

        if (!n || !adjList) return false;
        if (n === 0) return false;

        // Colors: 0 = UNVISITED (unvisited), 1 = PROCESSING (processing), 2 = FINISHED (finished)
        const UNVISITED = 0,
            PROCESSING = 1,
            FINISHED = 2;
        const color = new Array(n).fill(UNVISITED);

        const dfs = (u) => {
            color[u] = PROCESSING;

            for (const [v] of adjList[u]) {
                if (color[v] === PROCESSING) {
                    return true;
                }

                if (color[v] === UNVISITED && dfs(v)) {
                    return true;
                }
            }

            color[u] = FINISHED;
            return false;
        };

        for (let u = 0; u < n; u++) {
            if (color[u] === UNVISITED && dfs(u)) {
                return true;
            }
        }

        return false;
    }

    // Time Complexity: O(V + E)
    // Space Complexity: O(V)
    // https://leetcode.com/problems/course-schedule-ii/
    topologicalSort() {
        const { n, adjList } = this;
        const inDeg = [...this.inDeg];
        const topo = [];
        const queue = [];

        for (let u = 0; u < n; u++) {
            if (inDeg[u] === 0) queue.push(u);
        }

        while (queue.length) {
            const u = queue.shift();
            topo.push(u);

            for (let [v] of adjList[u]) {
                inDeg[v]--;
                if (inDeg[v] === 0) {
                    queue.push(v);
                }
            }
        }

        // Optional: Detect cycle
        if (topo.length !== n) {
            throw new Error("Graph has a cycle; topological sort not possible");
        }

        return topo;
    }

    // https://leetcode.com/problems/minimize-maximum-component-cost/
    /**
     * Finds the Minimum Spanning Tree using Kruskal's algorithm
     * @returns {Array<[number, number, number]>} Array of MST edges [u, v, weight]
     * @throws {Error} If number of vertices is invalid
     */
    kruskals() {
        const { n, edges } = this;

        // Input validation
        if (!edges || edges.length === 0) {
            return [];
        }

        if (n <= 0) {
            throw new Error("Number of vertices must be positive");
        }

        // Sort edges by weight (ascending order)
        // Direct sorting is more efficient than priority queue for Kruskal's
        const sortedEdges = [...edges].sort((a, b) => (a[2] || 1) - (b[2] || 1));

        const uf = new UnionFind(n);
        const mstEdges = [];
        let totalWeight = 0;

        for (const [u, v, w = 1] of sortedEdges) {
            // Validate edge vertices are within bounds
            if (u < 0 || u >= n || v < 0 || v >= n) {
                console.warn(`Skipping invalid edge: [${u}, ${v}] - vertices must be in range [0, ${n - 1}]`);
                continue;
            }

            // Skip self-loops
            if (u === v) {
                continue;
            }

            // If vertices are in different components, add edge to MST
            if (uf.find(u) !== uf.find(v)) {
                uf.union(u, v);
                mstEdges.push([u, v, w]);
                totalWeight += w;

                // Early termination: MST complete with n-1 edges
                if (mstEdges.length === n - 1) {
                    break;
                }
            }
        }

        // Verify connectivity (optional but useful for debugging)
        if (mstEdges.length !== n - 1 && n > 1) {
            console.warn(`Graph is disconnected: found ${mstEdges.length} edges, expected ${n - 1}`);
        }

        return mstEdges;
    }


    kruskals() {
        const { n, edges } = this;

        // Sort edges by weight, default weight to 1 if undefined/null
        const sortedEdges = [...edges].sort((a, b) => (a[2] ?? 1) - (b[2] ?? 1));

        const uf = new UnionFind(n);
        const mstEdges = [];
        let totalWeight = 0;

        for (const [u, v, w = 1] of sortedEdges) {
            if (uf.find(u) !== uf.find(v)) {
                uf.union(u, v);
                mstEdges.push([u, v, w]);
                totalWeight += w;

                // Stop early if MST is complete
                if (mstEdges.length === n - 1) break;
            }
        }

        return {
            edges: mstEdges,
            totalWeight,
            isConnected: mstEdges.length === n - 1,
        };
    }

    prims() {
        const { n, adjList } = this;

        const pq = new MinHeap_((a, b) => a[1] - b[1]); // [u, v, w]
        const inMST = new Array(n).fill(false);
        const key = new Array(n).fill(Infinity);  // Minimum weight to connect each vertex
        const parent = new Array(n).fill(-1);
        const mstEdges = [];
        let totalWeight = 0;

        const start = 0;
        key[start] = 0
        pq.enqueue([start, 0]);


        while (!pq.isEmpty() && mstEdges.length < n - 1) {
            const [u, w] = pq.dequeue();
            if (inMST[u]) continue;

            inMST[u] = true;

            if (parent[u] !== -1) {
                mstEdges.push([parent[u], u, w]);
                totalWeight += w;
            }

            // Push edges from the new vertex
            for (const [nextV, nextW] of adjList[u]) {
                if (!inMST[nextV] && key[nextV] > nextW) {
                    pq.enqueue([nextV, nextW]);
                    parent[nextV] = u
                    key[nextV] = nextW
                }
            }
        }

        return {
            edges: mstEdges,
            totalWeight,
            isConnected: mstEdges.length === n - 1,
        };
    }
}


var minCost = function (n, edges, k) {
    let g = new Graph(n)

    g.build(edges, true)

    const { edges: newEdges } = g.prims()
    newEdges.sort((a, b) => a[2] - b[2])

    while (k !== 1) {
        newEdges.pop()
        k--
    }

    let min = newEdges.reduce((a, c) => Math.max(a, c[2]), 0)

    return min

};
