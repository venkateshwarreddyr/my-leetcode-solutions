// Problem: Find the Town Judge
// LeetCode: https://leetcode.com/problems/find-the-town-judge/
// Language: javascript
// Runtime: 107 ms
// Memory: 50.4 MB
// Submitted: 2023-06-22

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, edges) {
    cl = console.log
    let indeg = Array.from({ length: n }).fill(0)
    let outdeg = Array.from({ length: n }).fill(0)
    for (let [u, v] of edges) {
        indeg[v - 1]++
        outdeg[u - 1]++
    }

    for (let i = 0; i < n; i++) {
        if (outdeg[i] === 0 && indeg[i] === n - 1) {
            return i + 1
        }
    }
    return -1;
};

// [[1,2],[2,3]]

