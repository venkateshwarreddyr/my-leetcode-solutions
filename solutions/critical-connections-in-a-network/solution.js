// Problem: Critical Connections in a Network
// LeetCode: https://leetcode.com/problems/critical-connections-in-a-network/
// Language: javascript
// Runtime: 508 ms
// Memory: 146.5 MB
// Submitted: 2023-08-25

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {

    // var tarzan = function (n, connections) {

    let g = Array.from({ length: n }, () => [])
    let an = []
    for (let [u, v] of connections) {
        g[u].push(v)
        g[v].push(u)
    }

    let firstVisitedTimeOf = new Array(n).fill(0)
    let time_firstVertexInPossibleCycle = new Array(n).fill(0)
    let time = 1
    function dfs(u, p) {
        firstVisitedTimeOf[u] = time_firstVertexInPossibleCycle[u] = time++

        for (let v of g[u]) {
            if (v === p) continue

            if (firstVisitedTimeOf[v] !== 0) {
                if (time_firstVertexInPossibleCycle[v] < time_firstVertexInPossibleCycle[u]) {
                    time_firstVertexInPossibleCycle[u] = time_firstVertexInPossibleCycle[v]
                }
                continue
            }
            dfs(v, u)

            if (firstVisitedTimeOf[u] < time_firstVertexInPossibleCycle[v]) {
                an.push([u, v])
            }
            if (time_firstVertexInPossibleCycle[v] < time_firstVertexInPossibleCycle[u]) {
                time_firstVertexInPossibleCycle[u] = time_firstVertexInPossibleCycle[v]
            }
        }
    }

    dfs(0, -1)

    return an
};
