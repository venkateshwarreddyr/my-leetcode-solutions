// Problem: Minimum Increments to Equalize Leaf Paths
// LeetCode: https://leetcode.com/problems/minimum-increments-to-equalize-leaf-paths/
// Language: javascript
// Runtime: 354 ms
// Memory: 127.3 MB
// Submitted: 2025-10-19

var minIncrease = function (n, edges, cost) {
    const g = Array.from({ length: n }, () => new Array());
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    let nodeChangeCountNeeded = 0;

    function dfs(u, parent) {
        const children = g[u].filter(v => v !== parent);
        if (children.length === 0) return cost[u];

        const childPathCosts = [];
        for (const v of children) {
            childPathCosts.push(dfs(v, u));
        }

        const maxChildPathCost = Math.max(...childPathCosts);

        for (const childPathCost of childPathCosts) {
            if (childPathCost !== maxChildPathCost) {
                nodeChangeCountNeeded++;
            }
        }

        return cost[u] + maxChildPathCost;
    }

    dfs(0, -1);

    return nodeChangeCountNeeded;
};

