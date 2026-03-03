// Problem: Arithmetic Subarrays
// LeetCode: https://leetcode.com/problems/arithmetic-subarrays/
// Language: javascript
// Runtime: 184 ms
// Memory: 48.7 MB
// Submitted: 2023-06-23

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    let cl = console.log
    let m = r.length;

    let an = []
    for (let i = 0; i < m; i++) {
        let a = new Set(nums.slice(l[i], r[i] + 1))
        let min = Math.min(...a)
        let max = Math.max(...a)
        let diff = (max - min) / (r[i] - l[i])
        let bool = true
        while (min < max) {
            min += diff
            if (!a.has(min)) {
                bool = (false);
                break;
            }
        }
        an.push(bool)
    }

    return an;
};
