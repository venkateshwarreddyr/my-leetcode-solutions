// Problem: Minimum Fuel Cost to Report to the Capital
// LeetCode: https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/
// Language: javascript
// Runtime: 469 ms
// Memory: 156.6 MB
// Submitted: 2023-06-23

/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
    let n = roads.length + 1;
    let g = Array.from({ length: n }, () => []);

    for (let [u, v] of roads) {
        g[u].push(v);
        g[v].push(u);
    }

    let ans = 0
    const dfsRecursion = (s, p) => {

        let x = 1;
        for (let e of g[s]) {
            if (e !== p) {
                x += dfsRecursion(e, s)
            }
        };
        if (p !== -1)
            ans += Math.ceil(x / seats)
        return x;
    }
    dfsRecursion(0, -1)
    return ans;
};
