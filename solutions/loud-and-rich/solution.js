// Problem: Loud and Rich
// LeetCode: https://leetcode.com/problems/loud-and-rich/
// Language: javascript
// Runtime: 85 ms
// Memory: 51.5 MB
// Submitted: 2023-07-27



var loudAndRich = function (edges, quiet) {
    let n = quiet.length
    let g = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        g[v].push(u);
    }
    let min;
    let an = new Array(n)

    function dfs(u, vis) {
        if (an[u] != undefined) return an[u]

        let min = u
        for (let v of g[u]) {
            if (an[u] !== undefined) continue;
            let x = dfs(v, vis, min)
            if (quiet[min] > quiet[x]) {
                min = x
            }
        }

        an[u] = min
        return min
    }

    for (let i = 0; i < n; i++) {
        dfs(i, new Set())
    }

    return an;
};


/**

    1 -> 0
    2 -> 1
    3 -> 1
    3 -> 7
    4 -> 3
    5 -> 3
    6 -> 3


 */
