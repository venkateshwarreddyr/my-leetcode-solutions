// Problem: Largest Color Value in a Directed Graph
// LeetCode: https://leetcode.com/problems/largest-color-value-in-a-directed-graph/
// Language: javascript
// Runtime: 845 ms
// Memory: 115.7 MB
// Submitted: 2023-06-20

var largestPathValue = function (colors, edges) {
    // let cl = console.log
    let n = colors.length

    colors = colors.split("")
        .map(ch => ch.charCodeAt(0) - 'a'.charCodeAt(0))
    // cl(colors) // 0 - 25

    let g = Array.from({ length: n }, () => new Array())
    let gadjs = g // adj list array

    for (let [u, v] of edges) {
        g[u].push(v)
    }

    let vis = Array.from({ length: n })
    let visinpath = Array.from({ length: n })
    function hasCycle(u) {
        if (visinpath[u]) return 1
        if (!vis[u]) {
            vis[u] = 1
            visinpath[u] = 1
            for (let v of gadjs[u]) {
                if (hasCycle(v)) {
                    return 1
                }
            }
            visinpath[u] = 0
        }
    }
    for (let u = 0; u < n; u++) {
        if (hasCycle(u)) {
            return -1
        }
    }

    let vals = Array.from({ length: n })
    let memo = Array.from({ length: n }) // maxValSumInAnyPath
    function dfs(u) {
        if (memo[u] === -Infinity) {
            let maxAdj = 0
            for (let v of gadjs[u]) {
                maxAdj = Math.max(maxAdj, dfs(v))
            }
            memo[u] = vals[u] + maxAdj
        }
        return memo[u]
    }
    let maxval = 0
    for (let c = 0; c < 26; c++) {
        for (let u = 0; u < n; u++) {
            memo[u] = -Infinity // node is not processed
            if (colors[u] === c) {
                vals[u] = 1
            } else {
                vals[u] = 0
            }
        }
        for (let u = 0; u < n; u++) {
            maxval = Math.max(maxval, dfs(u))
        }
    }
    return maxval
};

