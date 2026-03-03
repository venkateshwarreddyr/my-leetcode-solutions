// Problem: Minimum Time for K Connected Components
// LeetCode: https://leetcode.com/problems/minimum-time-for-k-connected-components/
// Language: javascript
// Runtime: 134 ms
// Memory: 95 MB
// Submitted: 2025-09-03

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var minTime = function (n, edges, k) {
    edges.sort((a, b) => b[2] - a[2])
    let uf = new UnionFind(n)
    for (let [u, v, t] of edges) {

        uf.union(u, v)
        if (uf.components() < k) {
            return t
        }
    }

    return 0
};

/**

2 -> 0 -> 1

 */


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
