// Problem: Minimum Increment to Make Array Unique
// LeetCode: https://leetcode.com/problems/minimum-increment-to-make-array-unique/
// Language: javascript
// Runtime: 213 ms
// Memory: 60.6 MB
// Submitted: 2024-06-14

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    let currMax = -1
    let an = 0
    nums.sort((a, b) => a - b)

    for (let e of nums) {
        if (e > currMax) {
            currMax = e
        } else {
            currMax++
            an += (currMax-e)
        }
    }

    return an
};
