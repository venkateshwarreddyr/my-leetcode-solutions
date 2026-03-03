// Problem: Shortest Path with Alternating Colors
// LeetCode: https://leetcode.com/problems/shortest-path-with-alternating-colors/
// Language: javascript
// Runtime: 102 ms
// Memory: 47.6 MB
// Submitted: 2023-06-21

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    cl = console.log
    let gred = Array.from({ length: n }, () => [])

    let gblue = Array.from({ length: n }, () => [])

    for (let [u, v] of redEdges) {
        gred[u].push(v);
    }

    for (let [u, v] of blueEdges) {
        gblue[u].push(v);
    }

    let an = new Array(n).fill(-1)

    function bfsfn(u, t, startWith) {
        let q = [[u, 0]];
        let visitedblue = new Array(n).fill(0)
        let visitedred = new Array(n).fill(0)

        while (q.length) {
            let [u, p] = q.shift();
            let g = p % 2 === startWith ? gred : gblue
            let visited = p % 2 === startWith ? visitedred : visitedblue

            if (visited[u]) {
                continue;
            }

            if (an[u] === -1) an[u] = p
            else an[u] = Math.min(an[u], p)
            visited[u]++;

            for (let v of g[u]) {
                q.push([v, p + 1]);
            }
        }
    }

    bfsfn(0, 0, 0)
    bfsfn(0, 0, 1)
    // for (let u = 0; u < n; u++) {
    //     let b = bfsfn(0, u, 1)
    //     // if (a === -1 && b === -1)
    //     //     an[u] = -1
    //     // else if (a > b && b === -1) {
    //     //     an[u] = a
    //     // } else if (a < b && a === -1) {
    //     //     an[u] = b
    //     // } else {
    //     //     an[u] = Math.min(a, b)
    //     // }
    // }

    return an
};
