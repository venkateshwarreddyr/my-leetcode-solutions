// Problem: Sort Even and Odd Indices Independently
// LeetCode: https://leetcode.com/problems/sort-even-and-odd-indices-independently/
// Language: javascript
// Runtime: 78 ms
// Memory: 44.8 MB
// Submitted: 2023-05-25

cl = console.log
var sortEvenOdd = function (nums) {
    let n = nums.length
    let odds = []
    let evens = []
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            evens.push(nums[i])
        } else {
            odds.push(nums[i])
        }
    }
    evens.sort((a, b) => a - b)
    odds.sort((a, b) => b - a)

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            nums[i] = (evens[Math.trunc(i / 2)])
        } else {
            nums[i] = (odds[Math.trunc(i / 2)])
        }
    }

    return nums;
};
