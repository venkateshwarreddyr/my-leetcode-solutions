// Problem: Number of Perfect Pairs
// LeetCode: https://leetcode.com/problems/number-of-perfect-pairs/
// Language: javascript
// Runtime: 180 ms
// Memory: 77.4 MB
// Submitted: 2026-01-18

/**
 * @param {number[]} nums
 * @return {number}
 */
var perfectPairs = function (nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    let n = nums.length
    let ans = 0
    function comp(a, b) {
        return Math.min(Math.abs(a - b), Math.abs(a + b)) <= Math.min(Math.abs(a), Math.abs(b)) &&
            Math.max(Math.abs(a - b), Math.abs(a + b)) >= Math.max(Math.abs(a), Math.abs(b))
    }
    for (let i = 0, j = 1; j < n; j++) {
        while (i < j && !comp(nums[i], nums[j])) {
            i++
        }

        let x = (j - i)
        ans += (x)
    }

    return ans
};
