// Problem: Most Stones Removed with Same Row or Column
// LeetCode: https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
// Language: javascript
// Runtime: 223 ms
// Memory: 50.1 MB
// Submitted: 2023-05-16

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    let n = stones.length;

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
        for (let j = i + 1; j < n; j++) {
            let [a1, a2] = stones[i]
            let [b1, b2] = stones[j]

            if (a1 === b1 || a2 === b2) {
                union(i, j)
            }
        }
    }

    let an = new Set(g.map(e => find(e)));
    console.log(g)
    return n - an.size;

};
