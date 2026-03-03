// Problem: Number of Operations to Make Network Connected
// LeetCode: https://leetcode.com/problems/number-of-operations-to-make-network-connected/
// Language: javascript
// Runtime: 125 ms
// Memory: 58.9 MB
// Submitted: 2023-05-15

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    if (connections.length < n - 1) return -1;

    let g = [...new Array(n)].map((_, i) => i);
    let connected = 0;

    const find = (a) => {
        return a === g[a] ? a : find(g[a])
    }

    const union = (a, b) => {
        let u = find(a);
        let v = find(b);

        if (u > v) {
            connected++;
            g[u] = v
        } else if (u < v) {
            connected++;
            g[v] = u
        }
    }

    for (let [a, b] of connections) {
        union(a, b);
    }

    return n - 1 - connected;
};
