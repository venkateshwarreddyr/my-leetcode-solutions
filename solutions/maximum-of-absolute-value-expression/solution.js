// Problem: Maximum of Absolute Value Expression
// LeetCode: https://leetcode.com/problems/maximum-of-absolute-value-expression/
// Language: javascript
// Runtime: 88 ms
// Memory: 55.8 MB
// Submitted: 2023-07-24

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
    let l1 = [], l2 = [], l3 = [], l4 = [], res = [];

    let n = arr1.length

    for (let i = 0; i < n; i++) {
        l1.push(arr1[i] + arr2[i] + i)
        l2.push(arr1[i] - arr2[i] + i)
        l3.push(-arr1[i] + arr2[i] + i)
        l4.push(-arr1[i] - arr2[i] + i)
    }

    res.push(Math.max(...l1) - Math.min(...l1))
    res.push(Math.max(...l2) - Math.min(...l2))
    res.push(Math.max(...l3) - Math.min(...l3))
    res.push(Math.max(...l4) - Math.min(...l4))

    return Math.max(...res);
};
