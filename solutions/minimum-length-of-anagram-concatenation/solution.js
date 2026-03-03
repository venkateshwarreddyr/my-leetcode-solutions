// Problem: Minimum Length of Anagram Concatenation
// LeetCode: https://leetcode.com/problems/minimum-length-of-anagram-concatenation/
// Language: javascript
// Runtime: 768 ms
// Memory: 68.1 MB
// Submitted: 2026-01-06

var minAnagramLength = function (s) {
    let n = s.length

    OO:
    for (let len = 1; len <= n; len++) {
        if (n % len !== 0) continue
        let prevt
        for (let i = 0; i + len <= n; i += len) {
            let t = s.slice(i, i + len)
            t = t.split("").sort().join("")
            if (prevt) {
                if (t != prevt) {
                    continue OO;
                }
            } else {
                prevt = t
            }
        }
        return len
    }
};

