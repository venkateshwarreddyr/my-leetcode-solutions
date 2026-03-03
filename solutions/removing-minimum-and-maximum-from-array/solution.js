// Problem: Removing Minimum and Maximum From Array
// LeetCode: https://leetcode.com/problems/removing-minimum-and-maximum-from-array/
// Language: javascript
// Runtime: 71 ms
// Memory: 54.7 MB
// Submitted: 2023-11-02

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (a) {
    let n = a.length
    let min = Math.min(...a)
    let max = Math.max(...a)

    let [mini, maxi] = [a.indexOf(min), a.indexOf(max)].sort((a, b) => a - b)

    return Math.min(maxi + 1, n - mini, mini + 1 + n - maxi)


};
