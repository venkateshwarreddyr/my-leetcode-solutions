// Problem: Reorder Routes to Make All Paths Lead to the City Zero
// LeetCode: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
// Language: javascript
// Runtime: 8858 ms
// Memory: 132 MB
// Submitted: 2023-05-13

function Graph(n, edges) {
    let g = new Map();
    let g1 = new Map();
    let bi = false; // bi-directional

    edges.forEach((edge) => {
        let [a, b] = edge;

        if (!g.has(a)) {
            g.set(a, [b]);
        } else {
            g.set(a, [...g.get(a), b]);
        }

        if (bi) {
            if (!g.has(b)) {
                g.set(b, [a]);
            } else {
                g.set(b, [...g.get(b), a]);
            }
        }
    });

    edges.forEach((edge) => {
        let [a, b] = edge;

        if (!g1.has(a)) {
            g1.set(a, [b]);
        } else {
            g1.set(a, [...g1.get(a), b]);
        }

        if (!g1.has(b)) {
            g1.set(b, [a]);
        } else {
            g1.set(b, [...g1.get(b), a]);
        }
    });

    const bfs = (s, d) => {
        if (s === d) return true;

        let queue = [s];
        let visited = new Set();
        let c = 0;

        while (queue.length) {
            let vertex = queue.shift();
            if (!visited.has(vertex) && g1.has(vertex)) {
                g1.get(vertex).forEach((e) => {
                    if (!visited.has(e))
                        queue.push(e);
                });
            }
            for (let ele of queue) {
                if (g.has(vertex) && g.get(vertex).includes(ele)) {
                    c++
                }
            }
            visited.add(vertex);
        }

        return c;
    };

    return { bfs };
}

var minReorder = function (n, connections) {
    let graph = new Graph(n, connections);
    return graph.bfs(0)
};
