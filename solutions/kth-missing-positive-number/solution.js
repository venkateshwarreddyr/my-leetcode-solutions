// Problem: Kth Missing Positive Number
// LeetCode: https://leetcode.com/problems/kth-missing-positive-number/
// Language: javascript
// Runtime: 45 ms
// Memory: 42 MB
// Submitted: 2023-05-23

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {

    let i = 0;
    let start = 1;

    while (k > 0) {
        if (arr[i] === start) {
            i++
        } else {
            k--;
        }
        start++;
    }

    return start-1;
};
