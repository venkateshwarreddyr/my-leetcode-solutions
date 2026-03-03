// Problem: Reconstruct Itinerary
// LeetCode: https://leetcode.com/problems/reconstruct-itinerary/
// Language: javascript
// Runtime: 67 ms
// Memory: 46.9 MB
// Submitted: 2023-09-14

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {

    let g = {}

    for (let [u, v] of tickets) {
        g[u] = g[u] || []

        g[u].push(v)
    }

    for (let u in g) {
        g[u].sort()
    }
    let an = []
    function dfs(u) {

        while (g[u]?.length) {
            dfs(g[u].shift())
        }

        an.push(u)
    }
    dfs("JFK")
    return an.reverse()
};
