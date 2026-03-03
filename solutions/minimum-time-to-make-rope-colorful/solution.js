// Problem: Minimum Time to Make Rope Colorful
// LeetCode: https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
// Language: javascript
// Runtime: 7 ms
// Memory: 65.7 MB
// Submitted: 2025-11-03

cl = console.log
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (s, neededTime) {
    let n = s.length
    let i = 0
    let an = 0
    for (let j = 1; j < n; j++) {
        let sum = neededTime[i]
        let max = neededTime[i]
        while (s[i] === s[j]) {
            max = Math.max(max, neededTime[j])
            sum += neededTime[j]
            j++
        }

        if (j - i > 1) {
            an += (sum - max)
        }
        i = j

    }

    return an;
};
