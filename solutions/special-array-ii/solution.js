// Problem: Special Array II
// LeetCode: https://leetcode.com/problems/special-array-ii/
// Language: javascript
// Runtime: 218 ms
// Memory: 83.5 MB
// Submitted: 2024-05-19

cl = console.log
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
    nums = nums.map(e => e % 2)
    let n = nums.length
    cl(nums)
    let ps = [0]
    let sum = 0
    for (let i = 1; i < n; i++) {
        sum += (nums[i - 1] == nums[i] ? 1 : 0)
        ps.push(sum);
    }
    let an = []
    for (let [start, end] of queries) {
        an.push(ps[start] === ps[end])
    }


    return an
};
