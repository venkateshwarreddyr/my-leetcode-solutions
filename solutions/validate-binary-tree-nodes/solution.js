// Problem: Validate Binary Tree Nodes
// LeetCode: https://leetcode.com/problems/validate-binary-tree-nodes/
// Language: javascript
// Runtime: 113 ms
// Memory: 58.3 MB
// Submitted: 2023-10-17

// cl = console.log
var validateBinaryTreeNodes = function (n, lc, rc) {
    let g = [...new Array(n)].map((_, i) => i);

    const find = (a) => {
        return a === g[a] ? a : find(g[a]);
    };

    const union = (a, b) => {
        let u = find(a);
        let v = find(b);

        if (u > v) {
            g[u] = v;
        } else if (u < v) {
            g[v] = u;
        }
    };

    let graph = new Map();

    const edges = []
    const added = new Set()
    for (let i = 0; i < lc.length; i++) {
        let e = []
        if (lc[i] > -1) {
            if (added.has(lc[i])) return false;
            e.push(lc[i])
            added.add(lc[i])
        }
        if (rc[i] > -1) {
            if (added.has(rc[i])) return false;
            e.push(rc[i])
            added.add(rc[i])
        }
        edges.push(e)
    }
    // cl(edges)

    let i = 0;
    for (let e of edges) {
        for (let c of e) {
            if (find(c) === find(i)) {
                return false;
            }
            union(c, i)
        }
        i++;
    }

    let set = new Set()
    for (let e of g) {
        set.add(find(e))
    }
    // cl(g)
    return set.size === 1
};
