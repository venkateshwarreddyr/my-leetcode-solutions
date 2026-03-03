// Problem: Detect Pattern of Length M Repeated K or More Times
// LeetCode: https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/
// Language: javascript
// Runtime: 68 ms
// Memory: 44.4 MB
// Submitted: 2023-06-05

cl = console.log
var containsPattern = function (arr, m, k) {
    let s = arr.join(',')
    let n = arr.length
    for (let i = 0; i < n - m; i++) {
        let a = arr.slice(i, i + m)
        let newA = []
        for (let j = 0; j < k; j++) {
            newA = [...newA, ...a]
        }
        let newS = newA.join(",")
        if (s.length !== s.replace(newS, "").length) return true
    }

    return false
};
