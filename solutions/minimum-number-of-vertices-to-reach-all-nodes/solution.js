// Problem: Minimum Number of Vertices to Reach All Nodes
// LeetCode: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
// Language: javascript
// Runtime: 200 ms
// Memory: 76.9 MB
// Submitted: 2023-06-17

var findSmallestSetOfVertices = function (n, a) {
    let adjsset = new Set(a.map(([a, b]) => b))
    let ss = []
    for (let u = 0; u < n; u++) {
        if (adjsset.has(u)) {
            // not source
        } else {
            ss.push(u)
        }
    }
    return ss
};

