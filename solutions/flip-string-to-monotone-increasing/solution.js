// Problem: Flip String to Monotone Increasing
// LeetCode: https://leetcode.com/problems/flip-string-to-monotone-increasing/
// Language: javascript
// Runtime: 1279 ms
// Memory: 140.3 MB
// Submitted: 2023-07-04

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr1 = function (s) {
    let n = s.length;
    let memo = {}
    function fn(i, flips, mono) {
        if (i === n) {
            return flips
        }
        let x = i + "," + mono
        if (memo[x] !== undefined) return memo[x]
        if (!mono && s[i] === "0")
            memo[x] = Math.min(fn(i + 1, flips, 0), fn(i + 1, flips + 1, 1))
        else if (!mono && s[i] === "1")
            memo[x] = Math.min(fn(i + 1, flips, 1), fn(i + 1, flips + 1, 0))
        else if (mono && s[i] === "0")
            memo[x] = Math.min(fn(i + 1, flips + 1, mono))
        else if (mono && s[i] === "1")
            memo[x] = Math.min(fn(i + 1, flips, mono))

        return memo[x]
    }

    return fn(0, 0, 0)
};
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    let n = s.length;
    let memo = {}
    function fn(i, mono) {
        if (i === n) return 0
        let x = i + "," + mono
        if (memo[x]) return memo[x]
        if (!mono && s[i] === "0")
            memo[x] = Math.min(fn(i + 1, 0), 1 + fn(i + 1, 1))
        else if (!mono && s[i] === "1")
            memo[x] = Math.min(fn(i + 1, 1), 1 + fn(i + 1, 0))
        else if (mono && s[i] === "0")
            memo[x] = (1 + fn(i + 1, mono))
        else if (mono && s[i] === "1")
            memo[x] = (fn(i + 1, mono))

        return memo[x]
    }

    return fn(0, 0)
};
