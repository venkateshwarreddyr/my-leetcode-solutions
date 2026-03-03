// Problem: Divide Array in Sets of K Consecutive Numbers
// LeetCode: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
// Language: javascript
// Runtime: 189 ms
// Memory: 76.7 MB
// Submitted: 2024-06-06

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
    let ob = {}

    for (let e of nums) {
        ob[e] = ob[e] ?? 0
        ob[e]++
    }

    let keys = Object.keys(ob).map(e => +e)
    while (keys.length) {
        if (k > keys.length) return false
        let prev = 0
        let last = ob[keys[keys.length - 1]]
        for (let i = keys.length - 1; i >= keys.length - k; i--) {
            if (prev) {
                if (prev - 1 !== keys[i]) return false
            }
            prev = keys[i]
            ob[prev] -= last
            if (ob[prev] < 0) return false
        }

        while (ob[keys[keys.length - 1]] === 0) {
            keys.pop()
        }
    }

    return true
};
