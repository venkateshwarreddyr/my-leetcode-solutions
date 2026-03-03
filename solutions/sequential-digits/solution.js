// Problem: Sequential Digits
// LeetCode: https://leetcode.com/problems/sequential-digits/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.7 MB
// Submitted: 2025-11-07

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let nums = []
    for (let i = 1; i < 10; i++) {
        let x = ''
        for (let j = i; j < 10; j++) {
            x += j
            nums.push(+x)
        }
    }
    let ans = []
    for (let num of nums) {
        if (num >= low && num <= high) {
            ans.push(num)
        }
    }

    ans.sort((a, b) => a - b)
    return ans
};
