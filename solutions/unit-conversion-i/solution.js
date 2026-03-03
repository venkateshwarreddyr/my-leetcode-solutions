// Problem: Unit Conversion I
// LeetCode: https://leetcode.com/problems/unit-conversion-i/
// Language: javascript
// Runtime: 589 ms
// Memory: 156.3 MB
// Submitted: 2025-09-01

/**
 * @param {number[][]} conversions
 * @return {number[]}
 */
var baseUnitConversions = function (edges) {
    let n = edges.length
    let mod = BigInt(10 ** 9 + 7)
    function dfsWrapper() {
        let g = Array.from({ length: n + 1 }, () => []);
        for (let [u, v, c] of edges) {
            g[u].push([v, BigInt(c)]);
        }

        let ans = new Array(n + 1);

        function dfs_(u, pathSum) {
            ans[u] = Number(pathSum)
            for (let [v, c] of g[u]) {
                // if (visinpath[v]) continue;
                dfs_(v, (pathSum * c) % mod);
            }

        }

        dfs_(0, BigInt(1));

        return ans;
    }
    return dfsWrapper();
};
