// Problem: Minimum Absolute Distance Between Mirror Pairs
// LeetCode: https://leetcode.com/problems/minimum-absolute-distance-between-mirror-pairs/
// Language: javascript
// Runtime: 246 ms
// Memory: 86.9 MB
// Submitted: 2025-11-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function (nums) {
    let min = Infinity
    {
        let ob = {}
        let n = nums.length
        for (let i = 0; i < n; i++) {
            let curr = nums[i]

            if (ob[curr] !== undefined && i - ob[curr] < min) {
                min = i - ob[curr]
            }
            let rev = Number(curr.toString().split('').reverse().join(''))

            ob[rev] = i
        }

    }

    return min === Infinity ? -1 : min
};
