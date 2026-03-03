// Problem: All Paths From Source to Target
// LeetCode: https://leetcode.com/problems/all-paths-from-source-to-target/
// Language: javascript
// Runtime: 94 ms
// Memory: 51.7 MB
// Submitted: 2023-07-11

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (g) {
    let n = g.length
    let tar = n - 1
    let an = []
    let visitedinpath = new Set();

    function bt(u) {
        if (tar === u) {
            an.push([...visitedinpath, u])
            return;
        }
        if (visitedinpath.has(u)) return;
        visitedinpath.add(u)
        for (let v of g[u]) {
            bt(v)
        }
        visitedinpath.delete(u)
    }

    bt(0)

    return an;
};
