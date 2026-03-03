// Problem: Maximize the Number of Target Nodes After Connecting Trees I
// LeetCode: https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/
// Language: javascript
// Runtime: 433 ms
// Memory: 66.7 MB
// Submitted: 2025-11-03

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
    let m = edges1.length + 1
    let g1 = Array.from({ length: m }, () => []);
    for (let [u, v] of edges1) {
        g1[u].push(v);
        g1[v].push(u);
    }

    let n = edges2.length + 1
    let g2 = Array.from({ length: n }, () => []);
    for (let [u, v] of edges2) {
        g2[u].push(v);
        g2[v].push(u);
    }

    function bfs(g, startNode, k) {

        let q = [[startNode, k, -1]]
        let count = 0
        while (q.length) {
            let [u, d, parent] = q.shift()
            if (d < 0) continue
            count++
            for (let v of g[u]) {
                if (v === parent) continue
                q.push([v, d - 1, u])
            }
        }

        return count
    }

    let max = 0
    for (let j = 0; j < n; j++) {
        max = Math.max(max, bfs(g2, j, k - 1))
    }

    let result = new Array(m).fill(0)
    for (let i = 0; i < m; i++) {
        result[i] = max + bfs(g1, i, k)
    }

    return result
};
