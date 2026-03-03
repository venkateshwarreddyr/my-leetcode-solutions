// Problem: Number of Provinces
// LeetCode: https://leetcode.com/problems/number-of-provinces/
// Language: javascript
// Runtime: 90 ms
// Memory: 45.8 MB
// Submitted: 2023-05-16

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (a) {
    let n = a.length;
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

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j]) {
                union(i, j)
            }
        }
    }

    let c = new Set();

    for (let e of g) {
        c.add(find(e))
    }

    return c.size;
};
