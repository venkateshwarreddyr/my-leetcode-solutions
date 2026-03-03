// Problem: Maximum Sum Circular Subarray
// LeetCode: https://leetcode.com/problems/maximum-sum-circular-subarray/
// Language: javascript
// Runtime: 58 ms
// Memory: 47.9 MB
// Submitted: 2024-01-16

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (a) {

    let n = a.length
    let totalSum = 0
    let minSum = 0
    let maxSum = 0
    let maxSumArray = -Infinity
    let minSumArray = Infinity
    for (let e of a) {
        totalSum += e
        minSum += e
        maxSum += e

        // if (minSum < minSumArray) {
        //     minSumArray = minSum
        // }
        minSumArray = Math.min(minSumArray, minSum)
        if (minSum > 0) {
            minSum = 0
        }

        // if (maxSum > maxSumArray) {
        //     maxSumArray = maxSum
        // }
        maxSumArray = Math.max(maxSumArray, maxSum)
        if (maxSum < 0) {
            maxSum = 0
        }
    }

    if (totalSum === minSumArray) {
        return maxSumArray
    }

    return Math.max(maxSumArray, totalSum - minSumArray)

};
