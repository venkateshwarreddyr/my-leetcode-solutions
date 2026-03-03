// Problem: Restore the Array From Adjacent Pairs
// LeetCode: https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
// Language: javascript
// Runtime: 452 ms
// Memory: 148.6 MB
// Submitted: 2023-11-10

cl = console.log
/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (pair) {
    let g = {}
    for (let [a, b] of pair) {
        g[a] = g[a] || []
        g[a].push(b)
        g[b] = g[b] || []
        g[b].push(a)
    }
    let an = []

    // while (visited.size !== Object.keys(g).length) {
    //     let u1 = an[0]
    //     let u2 = an[an.length - 1]

    //     visited.add(u1)
    //     visited.add(u2)

    //     for (let v of g[u1]) {
    //         if (visited.has(v)) continue
    //         an.unshift(v)
    //     }
    //     for (let v of g[u2]) {
    //         if (visited.has(v)) continue
    //         an.push(v)
    //     }
    // }
    let visited = new Set()

    function dfs(u) {

        an.push(u)
        visited.add(Number(u))
        for (let v of g[u]) {
        if (visited.has(v)) continue;
            dfs(v)
        }
    }

    for (let k in (g)) {
        if (g[k].length === 1) {
            dfs(k)
            break;
        }
    }

    return an;
};

/**

4 - 3 - 2 - 1
 */
