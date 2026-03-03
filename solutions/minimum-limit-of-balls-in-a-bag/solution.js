// Problem: Minimum Limit of Balls in a Bag
// LeetCode: https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/
// Language: javascript
// Runtime: 35 ms
// Memory: 65.6 MB
// Submitted: 2025-11-18

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {

    function canDivide(mid) {
        let ops = 0

        for (let e of nums) {
            ops += Math.ceil(e / mid) - 1
        }

        return ops <= maxOperations
    }

    let lo = 1, hi = Math.max(...nums)

    while (lo <= hi) {
        let mid = Math.floor(lo / 2 + hi / 2)

        if (canDivide(mid)) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }

    }

    return lo
};
