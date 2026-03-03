// Problem: Max Consecutive Ones III
// LeetCode: https://leetcode.com/problems/max-consecutive-ones-iii/
// Language: javascript
// Runtime: 74 ms
// Memory: 46.9 MB
// Submitted: 2023-07-07

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (a, k) {
    let n = a.length;
    let cc = 0
    let flips = k
    let max = 0
    for (let i = 0, j = 0; i < n; i++) {
        while ((a[j] === 1 || flips) && j < n) {
            cc++
            if (a[j] === 0) {
                flips--
            }
            j++
        }
        max = Math.max(max, cc)
        if (a[i] === 0) {
            flips++
            cc--
        } else {
            cc--
        }
    }


    return max;
};
/**
[1,1,1,0,0,0,1,1,1,1,0]
[0,1,2,3,4,5,6,7,8,9,10]
 */
