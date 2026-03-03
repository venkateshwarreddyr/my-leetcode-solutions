// Problem: Most Frequent Number Following Key In an Array
// LeetCode: https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
// Language: javascript
// Runtime: 61 ms
// Memory: 45.1 MB
// Submitted: 2023-05-26

/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    let obj = {}
    let n = nums.length
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === key)
            obj[nums[i + 1]] = (obj[nums[i + 1]] || 0) + 1
    }

    let max = -1;
    let maxKey = null

    for (let k in obj) {
        if (obj[k] > max) {
            max=obj[k]
            maxKey = k
        }
    }

    return maxKey
};
