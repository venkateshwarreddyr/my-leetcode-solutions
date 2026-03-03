// Problem: Minimum Operations to Transform String
// LeetCode: https://leetcode.com/problems/minimum-operations-to-transform-string/
// Language: javascript
// Runtime: 416 ms
// Memory: 76 MB
// Submitted: 2025-11-28

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let ob = {}

    for (let c of s) {
        ob[c] = ob[c] ?? 0
        ob[c]++
    }
    delete ob['a']
    let keys = Object.keys(ob).sort()
    let n = keys.length
    let ans = 0

    if (keys.length === 0) return 0

    for (let i = 1; i < n; i++) {
        let prev = keys[i - 1]
        let curr = keys[i]

        let num = curr.charCodeAt(0) - prev.charCodeAt(0)

        ans += num
    }

    let last = keys.at(-1)
    let num = 'z'.charCodeAt(0) - last.charCodeAt(0) + 1

    return ans + num

};
