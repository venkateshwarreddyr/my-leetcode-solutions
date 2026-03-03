// Problem: Maximum Balanced Shipments
// LeetCode: https://leetcode.com/problems/maximum-balanced-shipments/
// Language: javascript
// Runtime: 1 ms
// Memory: 74.3 MB
// Submitted: 2025-12-06

/**
 * @param {number[]} weight
 * @return {number}
 */
var maxBalancedShipments = function (weight) {
    let n = weight.length
    let max = weight[0]
    let ans = 0
    for (let i = 1; i < n; i++) {
        if (max > weight[i]) {
            ans++
            max = 0
        } else {
            max = weight[i]
        }
    }

    return ans
};
