// Problem: Minimize the Total Price of the Trips
// LeetCode: https://leetcode.com/problems/minimize-the-total-price-of-the-trips/
// Language: javascript
// Runtime: 126 ms
// Memory: 52.4 MB
// Submitted: 2023-09-12

cl = console.log
var minimumTotalPrice = function (n, edges, price, trips) {
    let g = Array.from({ length: n }, () => new Set())

    for (let [u, v] of edges) {
        g[u].add(v)
        g[v].add(u)
    }

    let num_vis = new Array(n).fill(0)
    for (let [s, d] of trips) {
        let visinpath = new Array(n).fill(0)
        function dfs(u, p, d) {
            visinpath[u] = 1
            if (u === d) {
                for (let i = 0; i < n; i++) {
                    if (visinpath[i]) {
                        num_vis[i]++
                    }
                }
            }

            for (let v of g[u]) {
                if (v === p || visinpath[v]) continue
                dfs(v, u, d)
            }
            visinpath[u] = 0
        }

        dfs(s, -1, d)
    }
    cl(num_vis)
    let dp = Array.from({ length: n }, () => [undefined, undefined])
    function dfs2(u, p, isHalf = false) {

        if (dp[u][isHalf] !== undefined) return dp[u][isHalf]

        let sum = (isHalf ? price[u] / 2 : price[u]) * num_vis[u]
        for (let v of g[u]) {
            let min = Infinity
            if (v === p) continue
            if (!isHalf) {
                min = Math.min(min,
                    dfs2(v, u, true)
                )
            }
            min = Math.min(min,
                dfs2(v, u, false)
            )
            sum += min
        }
        dp[u][isHalf] = sum
        return sum
    }

    return Math.min(dfs2(0, -1, true), dfs2(0, -1, false))
};
