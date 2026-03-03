// Problem: Sign of the Product of an Array
// LeetCode: https://leetcode.com/problems/sign-of-the-product-of-an-array/
// Language: javascript
// Runtime: 63 ms
// Memory: 43.8 MB
// Submitted: 2023-05-23

cl = console.log
var arraySign = function (nums) {
    let count = 0

    for (let c of nums) {
        if (c < 0) {
            count++
        } else if (c === 0) return 0
    }
    return count % 2 === 0 ? 1 : -1
};
