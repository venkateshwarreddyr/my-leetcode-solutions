// Problem: Minimum Score of a Path Between Two Cities
// LeetCode: https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
// Language: javascript
// Runtime: 1117 ms
// Memory: 92 MB
// Submitted: 2023-06-23

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
    let cl = console.log
    let g = [...new Array(n + 1)].map((_, i) => i);



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

    for (let [u, v] of roads) {
        union(u, v)
    }

    let min = Infinity

    for (let [u, v, c] of roads) {
        if (find(u) === find(1)) {
            min = Math.min(min, c)
        }
    }

    return min
};
