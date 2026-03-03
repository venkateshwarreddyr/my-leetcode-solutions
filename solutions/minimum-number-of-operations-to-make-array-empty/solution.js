// Problem: Minimum Number of Operations to Make Array Empty
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
// Language: javascript
// Runtime: 82 ms
// Memory: 69.1 MB
// Submitted: 2025-11-21

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let obj = {}

    for (let c of nums) {
        obj[c] = obj[c] ?? 0
        obj[c]++
    }

    let ans = 0
    for(let key in obj) {
        let value = obj[key]
        if(value === 1) return -1
        ans+=Math.ceil(value / 3)
    }

    return ans
};
