// Problem: Partition Array Such That Maximum Difference Is K
// LeetCode: https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/
// Language: javascript
// Runtime: 234 ms
// Memory: 54.2 MB
// Submitted: 2023-07-20

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (a, k) {
    let n = a.length

    a.sort((a, b) => a - b);
    let an = a[0]
    let cc = 1
    for (let i = 1; i < n; i++) {
        if (a[i] - an <= k) {
            continue
        }
        an = a[i]
        cc++
    }

    return cc;
};
