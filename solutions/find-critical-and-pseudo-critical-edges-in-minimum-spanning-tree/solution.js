// Problem: Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
// LeetCode: https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
// Language: javascript
// Runtime: 564 ms
// Memory: 49.6 MB
// Submitted: 2023-08-12

class UnionFind {
    constructor(n) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.osize = new Array(n).fill(1);
    }

    build(edges) {
        for (let [u, v] of edges) {
            union(u, v);
        }
    }

    union(u, v) {
        u = this.find(u);
        v = this.find(v);

        if (u === v) return 0;

        if (this.osize[u] < this.osize[v]) {
            [u, v] = [v, u];
        } else if (this.osize[u] === this.osize[v] && u < v) {
            [u, v] = [v, u];
        }
        this.o[u] = v;
        this.osize[v] += this.osize[u];

        return 1;
    }

    find(u) {
        if (u !== this.o[u]) {
            this.o[u] = this.find(this.o[u]);
        }

        return this.o[u];
    }

    findVal(u) {
        return this.osize[this.find(u)];
    }

    getMax() {
        return Math.max(...Object.values(this.osize));
    }

    print() {
        let cl = console.log;
        cl(this.o);
        cl(this.osize);
    }

    clone() {
        let ret = new UnionFind();
        ret.o = [...this.o];
        ret.osize = [...this.osize];

        return ret;
    }

    size(x) {
        return this.osize[this.find(x)];
    }

    getRootCount(x) {
        let set = new Set()

        for (let u of this.o) {
            set.add(this.find(u))
        }
        return set.size
    }
    
}


var findCriticalAndPseudoCriticalEdges = function (n, edges) {
    function buildMST(pickThisEdgeFirst, skipThisEdge) {
        let totalCost = 0
        let uf = new UnionFind(n)
        if (pickThisEdgeFirst) {
            uf.union(pickThisEdgeFirst[0], pickThisEdgeFirst[1])
            totalCost += pickThisEdgeFirst[2]
        }
        for (let edge of edges) {
            if ('' + edge === skipThisEdge) continue
            let [u, v, cost] = edge
            if (uf.union(u, v)) { // not loop
                totalCost += cost
            }
        }
        return uf.getRootCount() === 1 ? totalCost : Infinity
    }
    let edge2iObj = {}
    edges.forEach((edge, i) => edge2iObj['' + edge] = i)
    edges.sort((a, b) => a[2] - b[2]) //    sort by weight  asc
    let criticalEdges = []
    let psuedoCriticalEdges = []
    const minCost = buildMST(null, null)
    for (let edge of edges) {
        const i = edge2iObj['' + edge]
        // cost   without edge  is more     => critical
        const costWithoutEdge = buildMST(null, '' + edge) // skip edge
        if (costWithoutEdge > minCost) {
            criticalEdges.push(i)
        } else {
            // cost   with edge  is same     => pseudo critical
            const costWithEdge = buildMST(edge, null)
            if (costWithEdge === minCost) {
                psuedoCriticalEdges.push(i)
            }
        }
    }
    return [criticalEdges, psuedoCriticalEdges]
}
