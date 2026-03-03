// Problem: Count Substrings That Differ by One Character
// LeetCode: https://leetcode.com/problems/count-substrings-that-differ-by-one-character/
// Language: javascript
// Runtime: 5 ms
// Memory: 53.8 MB
// Submitted: 2025-10-28

var countSubstrings = function (s, t) {
    let n = s.length
    let m = t.length
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let diff = 0
            for (let k = 0; (i + k < n) && (j + k < m); k++) {
                if (s[i + k] !== t[j + k]) {
                    diff += 1
                }
                if (diff === 1) count++
                if (diff > 1) break
            }
        }
    }
    return count
};

var countSubstrings22222222222 = function (s, t) {
    let n = s.length
    let m = t.length
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let ss = s.slice(i, j)
            for (let start = 0; start + ss.length - 1 < m; start++) {
                let diff = 0
                for (let k = 0; k < ss.length; k++) {
                    if (ss[k] !== t[start + k]) {
                        diff += 1
                    }
                }
                if (diff === 1) {
                    count++
                }
            }
        }
    }
    return count
};

