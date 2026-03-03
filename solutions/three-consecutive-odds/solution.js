// Problem: Three Consecutive Odds
// LeetCode: https://leetcode.com/problems/three-consecutive-odds/
// Language: javascript
// Runtime: 51 ms
// Memory: 48.5 MB
// Submitted: 2024-07-01

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let n = arr.length;
    let oddCount = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            oddCount = 0
        } else {
            oddCount++;
        }


        if (oddCount === 3) {
            return true;
        }
    }

    return false;
};
