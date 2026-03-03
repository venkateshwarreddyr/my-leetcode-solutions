// Problem: Minimize the Maximum Edge Weight of Graph
// LeetCode: https://leetcode.com/problems/minimize-the-maximum-edge-weight-of-graph/
// Language: javascript
// Runtime: 1530 ms
// Memory: 126.6 MB
// Submitted: 2025-09-04

var minMaxWeight = function (n, edges, threshold) {
    const graph = Array(n).fill(0).map(() => new Map());
    for (const [u, v, w] of edges) {
        graph[v].set(u, Math.min(graph[v].get(u) ?? Infinity, w));
    }
    let ans = 0;
    const pq = new PriorityQueue((x, y) => x[0] - y[0] ); pq.enqueue([0, 0]);
    const dist = Array(n).fill(Infinity); 
    dist[0] = 0;
    const seen = new Set();

    while (pq.size()) {
        const [x, v] = pq.dequeue();
        seen.add(v);
        if (seen.size == n) return x;
        if (dist[v] == x) {
            console.log(graph[v])
            for (const [u, w] of graph[v])
                if (Math.max(x, w) < dist[u]) {
                    pq.enqueue([Math.max(x, w), u]);
                    dist[u] = Math.max(x, w);
                }
        }
    }
    return -1;
};
