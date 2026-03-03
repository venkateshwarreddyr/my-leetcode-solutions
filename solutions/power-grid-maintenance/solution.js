// Problem: Power Grid Maintenance
// LeetCode: https://leetcode.com/problems/power-grid-maintenance/
// Language: javascript
// Runtime: 405 ms
// Memory: 146 MB
// Submitted: 2025-11-06

var processQueries = function (c, connections, queries) {
    const parent = Array.from({ length: c + 1 }, () => -1);

    const find = (x) => parent[x] < 0 ? x : find(parent[x]);

    const union = (a, b) => {
        let pa = find(a), pb = find(b);
        if (pa === pb) return;

        if (pa < pb) {
            parent[pa] += parent[pb];
            parent[pb] = pa;
        } else {
            parent[pb] += parent[pa];
            parent[pa] = pb;
        }
    };

    for (const [u, v] of connections) {
        union(u, v);
    }

    const online = Array(c + 1).fill(true);
    online[0] = false;

    const components = new Map();

    for (let i = 1; i <= c; i++) {
        const root = find(i);
        if (!components.has(root)) {
            components.set(root, new PriorityQueue((a, b) => a - b));
        }
        components.get(root).enqueue(i);
    }

    const result = [];

    for (const [type, id] of queries) {
        if (type === 2) {
            online[id] = false;
            continue;
        }

        if (online[id]) {
            result.push(id);
            continue;
        }

        const component = components.get(find(id));

        while (component.size() > 0 && !online[component.front()]) {
            component.dequeue();
        }

        result.push(component.size() > 0 ? component.front() : -1);
    }

    return result;
};

