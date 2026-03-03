// Problem: Maximum Score of a Node Sequence
// LeetCode: https://leetcode.com/problems/maximum-score-of-a-node-sequence/
// Language: javascript
// Runtime: 333 ms
// Memory: 127.3 MB
// Submitted: 2023-09-14

cl = console.log
var maximumScore = function (scores, edges) {
    let n = scores.length
    const g = Array.from({ length: n }, () => [])
    for (const [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
    }

    for (const u in g) {
        g[u].sort((a, b) => scores[b] - scores[a])
    }

    let maxScore = -1

    for (const [u, v] of edges) {
        const vArrOptions = []
        const wArrOptions = []

        for (let e of g[u]) {
            if (vArrOptions.length === 2) break
            if (![u, v].includes(e)) {
                vArrOptions.push(e)
            }
        }

        for (let e of g[v]) {
            if (wArrOptions.length === 2) break
            if (![u, v].includes(e)) {
                wArrOptions.push(e)
            }
        }

        for (let e of vArrOptions) {
            for (let e1 of wArrOptions) {
                if (e === e1) continue
                maxScore = Math.max(maxScore, scores[u] + scores[v] + scores[e] + scores[e1])
            }
        }
    }

    return maxScore
}
