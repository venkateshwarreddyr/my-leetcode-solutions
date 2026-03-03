// Problem: Rank Transform of an Array
// LeetCode: https://leetcode.com/problems/rank-transform-of-an-array/
// Language: javascript
// Runtime: 257 ms
// Memory: 72.6 MB
// Submitted: 2023-05-26

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let obj = {}
    let newarr = [...arr].sort((a, b) => a - b)
    let i = 1
    newarr.forEach((e) => {
        if (!obj[e]) {
            obj[e] = i

            i++
        }
    })

    return arr.map(e => obj[e])
};
