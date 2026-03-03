// Problem: Merge Intervals
// LeetCode: https://leetcode.com/problems/merge-intervals/
// Language: javascript
// Runtime: 18 ms
// Memory: 67 MB
// Submitted: 2025-10-30

var merge = function (a) {
    a.sort((a, b) => a[0] - b[0])
    const n = a.length
    let [s1, e1] = a[0]
    let r = [[s1, e1]]
    for (let i = 1; i < n; i++) {
        let [s1, e1] = r.at(-1)
        let [s2, e2] = a[i]
        if (s2 <= e1) {
            // overlap  [s1,e2]
            if (e1 < e2) {
                // partial overlap  [s1,e2]
                r[r.length - 1][1] = e2
            }
        } else {
            r.push([s2, e2])
        }
    }
    return r
};

