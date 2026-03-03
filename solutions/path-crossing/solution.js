// Problem: Path Crossing
// LeetCode: https://leetcode.com/problems/path-crossing/
// Language: javascript
// Runtime: 60 ms
// Memory: 43.7 MB
// Submitted: 2023-06-01

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let ob = {
        "N": [0, 1],
        "S": [0, -1],
        "E": [-1, 0],
        "W": [1, 0]
    }
    let set = new Set()
    let curr = [0, 0]
    set.add(curr.toString())
    for (let c of path) {
        let [x, y] = ob[c];
        let [a, b] = curr
        curr = [a + x, b + y]
        if(set.has(curr.toString())){
            return true
        }
        set.add(curr.toString())
    }

    return false
};
