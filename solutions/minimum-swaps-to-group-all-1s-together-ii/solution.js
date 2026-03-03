// Problem: Minimum Swaps to Group All 1's Together II
// LeetCode: https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/
// Language: javascript
// Runtime: 11 ms
// Memory: 64.5 MB
// Submitted: 2025-11-07

/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    let n = nums.length
    const countOnes = nums.reduce((a, c) => a + c, 0);
    const countZeros = nums.length - countOnes

    function fn(dig, subArrayLength) {
        let cc = 0
        let i = 0, j = 0
        for (; j < subArrayLength; j++) {
            if (nums[j] === dig) {
                cc++
            }
        }
        let maxcc = cc
        for (; j < n; j++, i++) {
            if (nums[j] === dig) {
                cc++
            }
            if (nums[i] === dig) {
                cc--
            }
            maxcc = Math.max(maxcc, cc)
        }
        return maxcc
    }


    return Math.min(countZeros - fn(0, countZeros), countOnes - fn(1, countOnes))

};
