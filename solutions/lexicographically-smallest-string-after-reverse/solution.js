// Problem: Lexicographically Smallest String After Reverse
// LeetCode: https://leetcode.com/problems/lexicographically-smallest-string-after-reverse/
// Language: javascript
// Runtime: 1179 ms
// Memory: 62 MB
// Submitted: 2025-10-27

var lexSmallest = function (s) {
    let n = s.length
    let smallest
    for (let j = 1; j <= n; j++) {
        let a = [...s.slice(0, j)].reverse().join("") + s.slice(j)
        if (smallest === undefined) smallest = a
        let b = s.slice(0, j) + [...s.slice(j)].reverse().join("")
        // let b = s.slice(0, n - j) + [...s.slice(n - j)].reverse().join("")
        if (a < smallest) smallest = a
        if (b < smallest) smallest = b
    }
    return smallest
};

