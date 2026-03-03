// Problem: Find Eventual Safe States
// LeetCode: https://leetcode.com/problems/find-eventual-safe-states/
// Language: javascript
// Runtime: 108 ms
// Memory: 61 MB
// Submitted: 2023-08-19

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (g) {
    let n = g.length
    let outdegree = new Array(n).fill(0)
    let g1 = Array.from({ length: n }, () => [])
    let q = []
    let i = 0
    for (let e of g) {
        for (let v of g[i]) {
            g1[v].push(i)
        }
        outdegree[i] = e.length
        if (outdegree[i] == 0) q.push(i)
        i++
    }
    let safe = new Array(n)
    while (q.length) {
        let u = q.pop()
        safe[u] = 1

        for (let v of g1[u]) {
            outdegree[v]--
            if (outdegree[v] === 0) q.push(v)
        }

    }

    let an = []

    for (let i = 0; i < n; i++) {
        if (safe[i])
            an.push(i)
    }

    return an
};
