// Problem: Minimum Time to Collect All Apples in a Tree
// LeetCode: https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
// Language: javascript
// Runtime: 131 ms
// Memory: 75.7 MB
// Submitted: 2023-10-03


class Graph {
    constructor(n, edges, undirected = false, hasApple) {
        this.g = Array.from({ length: n }, () => new Array());
        for (let [u, v] of edges) {
            this.g[u].push(v);
            if (undirected) {
                this.g[v].push(u);
            }
        }

        this.hasApple = hasApple
    }

    dfst(u, p) {

        let pl = 0
        for (let v of this.g[u]) {
            if (v === p) continue;
            pl += this.dfst(v, u);
        }

        if (u === 0) return pl

        if (pl > 0 || this.hasApple[u]) {
            return pl + 2
        }

        return 0
    }

    dfstfn(u) {
        return this.dfst(u, -1);
    }
}

var minTime = function (n, edges, hasApple) {
    let gh = new Graph(n, edges, true, hasApple)
    return gh.dfstfn(0)
};

