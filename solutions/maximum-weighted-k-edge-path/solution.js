// Problem: Maximum Weighted K-Edge Path
// LeetCode: https://leetcode.com/problems/maximum-weighted-k-edge-path/
// Language: javascript
// Runtime: 718 ms
// Memory: 164.9 MB
// Submitted: 2025-09-07

var maxWeight = function (n, edges, k, t) {
    if (k === 0) return 0;

    const adjList = Array.from({ length: n + 1 }, () => []); // include node n
    for (let [u, v, w] of edges) {
        adjList[u].push([v, w]);
    }

    let an = -1;
    const memo = Array.from({ length: n + 1 },
        () => Array.from({ length: k + 1 },
            () => ({})));

    function dfs(u, edgeCount, pathSum) {
        if (pathSum >= t) return -1;
        if (edgeCount === k) return pathSum;
        if (memo[u][edgeCount][pathSum] !== undefined) return memo[u][edgeCount][pathSum];

        let max = -1;
        for (const [v, w] of adjList[u]) {
            max = Math.max(max, dfs(v, edgeCount + 1, pathSum + w));
        }
        return memo[u][edgeCount][pathSum] = max;
    }

    for (let i = 0; i <= n; i++) {
        an = Math.max(an, dfs(i, 0, 0));
    }

    return an;
};

