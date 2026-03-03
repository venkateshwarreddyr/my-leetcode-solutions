// Problem: Beautiful Towers I
// LeetCode: https://leetcode.com/problems/beautiful-towers-i/
// Language: javascript
// Runtime: 80 ms
// Memory: 44.1 MB
// Submitted: 2023-10-10

/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (a) {
    let n = a.length

    function calc(i) {
        let an = a[i]
        let tempMax = a[i]
        for (let j = i - 1; j > -1; j--) {
            tempMax = Math.min(tempMax, a[j])
            an += tempMax
        }
        tempMax = a[i]


        for (let j = i + 1; j < n; j++) {
            tempMax = Math.min(tempMax, a[j])
            an += tempMax
        }

        return an
    }

    let an = 0
    for (let i = 0; i < n; i++) {
        an = Math.max(an, calc(i))
    }
    return an
};
