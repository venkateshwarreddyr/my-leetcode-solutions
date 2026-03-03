// Problem: Non-decreasing Subsequences
// LeetCode: https://leetcode.com/problems/non-decreasing-subsequences/
// Language: javascript
// Runtime: 13 ms
// Memory: 72.9 MB
// Submitted: 2025-10-24

// let cl = console.log
var findSubsequences = function (a) {
    let n = a.length
    let result = []
    let path = []

    function backtrack(pos) {
        let visited = new Set()
        for (let i = pos; i < n; i++) {
            if (visited.has(a[i])) continue
            visited.add(a[i])
            if (path.at(-1) > a[i]) continue
            path.push(a[i])
            // cl(path)
            if (path.length >= 2) {
                result.push([...path])
            }
            backtrack(i + 1)
            path.pop()
        }
    }

    backtrack(0)
    return result
};

