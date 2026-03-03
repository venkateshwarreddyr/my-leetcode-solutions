// Problem: Count Visited Nodes in a Directed Graph
// LeetCode: https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/
// Language: javascript
// Runtime: 1058 ms
// Memory: 97.1 MB
// Submitted: 2023-10-02

function getComp(node, edges, comp, vis) {
    if (vis[node]) return;
    vis[node] = true;
    comp.push(node);
    getComp(edges[node], edges, comp, vis);
}

function countVisitedNodes(edges) {
    const n = edges.length;
    const indegree = new Array(n).fill(0);

    for (const u of edges) {
        indegree[u]++;
    }

    const q = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            q.push(i);
        }
    }

    const vis = new Array(n).fill(false);
    const topo = [];

    while (q.length > 0) {
        const curr = q.shift();
        topo.push(curr);

        vis[curr] = true;
        if (--indegree[edges[curr]] === 0) {
            q.push(edges[curr]);
        }
    }

    const res = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (vis[i]) continue;
        const comp = [];
        getComp(i, edges, comp, vis);
        const sz = comp.length;

        for (const u of comp) {
            res[u] = sz;
        }
    }

    topo.reverse();

    for (const it of topo) {
        res[it] = 1 + res[edges[it]];
    }

    return res;
}
