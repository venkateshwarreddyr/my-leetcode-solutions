// Problem: House Robber IV
// LeetCode: https://leetcode.com/problems/house-robber-iv/
// Language: javascript
// Runtime: 25 ms
// Memory: 65.7 MB
// Submitted: 2025-11-10

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    let low = Math.min(...nums);
    let high = Math.max(...nums);

    function canRobK(mid) {
        let cc = 0
        let robbedLastElement = false

        for (let e of nums) {
            if (!robbedLastElement && e <= mid) {
                cc++
                robbedLastElement = true
            } else {
                robbedLastElement = false
            }
        }

        return cc >= k
    }

    while (low <= high) {
        const mid = Math.floor(low / 2 + high / 2)
        if (canRobK(mid)) {
            high = mid - 1
        } else {
            low = mid + 1
        }

    }


    return low
};
