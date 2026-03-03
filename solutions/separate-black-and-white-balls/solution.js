// Problem: Separate Black and White Balls
// LeetCode: https://leetcode.com/problems/separate-black-and-white-balls/
// Language: javascript
// Runtime: 14 ms
// Memory: 59.1 MB
// Submitted: 2025-11-08

/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    let n = s.length
    let left = 0, right = n - 1
    let ans = 0
    while (left < right) {
        if (s[left] === '1' && s[right] === '0') {
            ans += right - left
            left++
            right--
        } else if (s[left] === '0') {
            left++
        } else if (s[right] === '1') {
            right--
        }
    }

    return ans
};
