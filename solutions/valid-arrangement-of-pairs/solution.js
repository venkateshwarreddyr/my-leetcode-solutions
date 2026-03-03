// Problem: Valid Arrangement of Pairs
// LeetCode: https://leetcode.com/problems/valid-arrangement-of-pairs/
// Language: javascript
// Runtime: 1000 ms
// Memory: 201.7 MB
// Submitted: 2023-08-27

/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {

    let g = {}
    let deg = {}
    for (let [u, v] of pairs) {
        g[u] = g[u] || []
        g[u].push(v)
        deg[u] = (deg[u] || 0) + 1
        deg[v] = (deg[v] || 0) - 1
    }

    let start = Object.keys(deg)[0]
    for (let u in deg) {
        if (deg[u] === 1) {
            start = u;
            break;
        }
    }
    let an = []
    function dfs(u) {

        while (g[u]?.length) {
            let v = g[u].pop()
            dfs(v)
            an.push([u, v])
        }

    }
    dfs(start)
    return an.reverse()
};
