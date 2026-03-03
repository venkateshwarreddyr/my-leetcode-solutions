// Problem: Find if Path Exists in Graph
// LeetCode: https://leetcode.com/problems/find-if-path-exists-in-graph/
// Language: javascript
// Runtime: 96 ms
// Memory: 114.3 MB
// Submitted: 2025-07-20


class UnionFind {
    constructor(n) {
        this.root = Array.from({ length: n }, (_, i) => i)
        this.rank = new Array(n).fill(0)
    }

    find(u) {
        const { root } = this

        if (root[u] === u) {
            return u
        }

        root[u] = this.find(root[u])

        return root[u]
    }

    union(u, v) {
        const { rank, root } = this
        let rootOfU = this.find(u)
        let rootOfV = this.find(v)

        if (rootOfU === rootOfV) {
            return
        }

        if (rank[rootOfU] > rank[rootOfV]) {
            root[rootOfV] = rootOfU
        } else if (rank[rootOfU] < rank[rootOfV]) {
            root[rootOfU] = rootOfV
        } else {
            rank[rootOfU]++
            root[rootOfV] = rootOfU
        }
    }

}

var validPath = function (n, edges, source, destination) {
    let uf = new UnionFind(n)

    for (let [u, v] of edges) {
        uf.union(u, v)
    }

    return uf.find(source) === uf.find(destination)
};
