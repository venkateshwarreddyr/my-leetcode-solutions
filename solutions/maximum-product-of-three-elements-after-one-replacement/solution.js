// Problem: Maximum Product of Three Elements After One Replacement
// LeetCode: https://leetcode.com/problems/maximum-product-of-three-elements-after-one-replacement/
// Language: javascript
// Runtime: 186 ms
// Memory: 72.9 MB
// Submitted: 2026-01-18

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    let max = 10 ** 5
    let [first, second] = nums

    if (first > 0 && second > 0) {
        return first * second * (max)
    }
    if (first > 0 && second < 0) {
        return first * second * (-max)
    }
    if (first < 0 && second > 0) {
        return first * second * (-max)
    }
    if (first < 0 && second > 0) {
        return first * second * (-max)
    }
    if (first < 0 && second < 0) {
        return first * second * (max)
    }

    return 0
};
