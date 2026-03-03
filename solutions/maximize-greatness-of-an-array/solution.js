// Problem: Maximize Greatness of an Array
// LeetCode: https://leetcode.com/problems/maximize-greatness-of-an-array/
// Language: javascript
// Runtime: 121 ms
// Memory: 51.9 MB
// Submitted: 2023-06-07

cl = console.log
var maximizeGreatness = function (nums) {
    nums.sort((a, b) => a - b)
    let c = 0
    let n = nums.length
    for (let i = 0, j = 0; j < n; j++) {
        if (nums[i] < nums[j]) {
            c++
            i++
        }
    }

    return c
};

