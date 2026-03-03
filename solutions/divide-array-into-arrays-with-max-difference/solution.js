// Problem: Divide Array Into Arrays With Max Difference
// LeetCode: https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/
// Language: javascript
// Runtime: 351 ms
// Memory: 90.9 MB
// Submitted: 2023-12-17


cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (a, k) {
    a.sort((a, b) => a - b)
    let n = a.length
    let an = []
    for (let i = 0; i < n; i++) {
        if (i % 3 == 1) {
            if (Math.abs(a[i - 1] - a[i]) <= k && Math.abs(a[i + 1] - a[i]) <= k && Math.abs(a[i - 1] - a[i + 1]) <= k) {

                an.push([a[i - 1], a[i], a[i + 1]])
                x = []
            } else {
                return []
            }
        }

    }

    return an

};
