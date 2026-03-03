// Problem: Find the Distinct Difference Array
// LeetCode: https://leetcode.com/problems/find-the-distinct-difference-array/
// Language: javascript
// Runtime: 167 ms
// Memory: 51.1 MB
// Submitted: 2023-06-05

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let ans = [];
    let sufObj = new Map();
    let preObj = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!sufObj.has(nums[i])) {
            sufObj.set(nums[i], 1)
        } else {
            sufObj.set(nums[i], sufObj.get(nums[i]) + 1)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (!preObj.has(nums[i])) {
            preObj.set(nums[i], 1)
        } else {
            preObj.set(nums[i], preObj.get(nums[i]) + 1)
        }

        if (sufObj.get(nums[i]) === 1) {
            sufObj.delete(nums[i])
        } else {
            sufObj.set(nums[i], sufObj.get(nums[i]) - 1)
        }


        ans.push(preObj.size - sufObj.size)
    }
    return ans;
};
