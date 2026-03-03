// Problem: Maximum Population Year
// LeetCode: https://leetcode.com/problems/maximum-population-year/
// Language: javascript
// Runtime: 63 ms
// Memory: 44.4 MB
// Submitted: 2023-05-26

cl = console.log
var maximumPopulation = function (logs) {
    let arr = new Array(100).fill(0)

    for (let [b, d] of logs) {
        b = b - 1950
        d = d - 1950

        while (b < d) {
            arr[b]++
            b++
        }
    }
    let max = -1
    let maxi = -1
    let i = 0
    for (let e of arr) {
        if (e > max) {
            max = e
            maxi = i
        }
        i++
    }
    return 1950 + maxi
};
