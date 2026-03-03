// Problem: Binary Subarrays With Sum
// LeetCode: https://leetcode.com/problems/binary-subarrays-with-sum/
// Language: javascript
// Runtime: 92 ms
// Memory: 46.9 MB
// Submitted: 2023-07-07

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (a, goal) {

    let sum = 0
    let ob = { 0: 1 }
    let cc = 0
    a.some((e, i) => {
        sum += e
        if (ob[sum - goal] !== undefined) {
            cc += ob[sum - goal]
        }
        ob[sum] = ob[sum] ?? 0
        ob[sum]++
    });

    return cc
};
