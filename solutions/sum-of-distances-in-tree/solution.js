// Problem: Sum of Distances in Tree
// LeetCode: https://leetcode.com/problems/sum-of-distances-in-tree/
// Language: javascript
// Runtime: 241 ms
// Memory: 95.3 MB
// Submitted: 2023-08-28

cl = console.log

var sumOfDistancesInTree = function (n, edges) {
    let g = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
    }

    function dfs() {
        // let vis = new Array(n)
        let nodecount = new Array(n).fill(1)
        let dist = new Array(n).fill(0)

        function dfs_(u, p) {
            for (let v of g[u]) {
                if (v === p) continue
                dfs_(v, u)
                nodecount[u] += nodecount[v]
                dist[u] += dist[v] + nodecount[v]
            }
        }



        const dfs2 = function (u, p) {
            for (const v of g[u]) {
                if (v === p) continue
                dist[v] = dist[u] - nodecount[v] + n - nodecount[v]
                dfs2(v, u)
            }
        }
        dfs_(0, -1)
        cl(nodecount)
        cl(dist)
        dfs2(0, -1)

        return dist
    }


    return dfs()
};

/**

n*nlogn ~ n^2

 */
