// Problem: Optimal Partition of String
// LeetCode: https://leetcode.com/problems/optimal-partition-of-string/
// Language: javascript
// Runtime: 100 ms
// Memory: 49.8 MB
// Submitted: 2023-06-24

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let cc = 0
    let set = new Set()
    let n = s.length
    for (let i = 0; i < n; i++) {
        if (set.has(s[i])) {
            cc++;
            set = new Set()
        }
        set.add(s[i])
    }
    if (set.size) cc++
    return cc
};
