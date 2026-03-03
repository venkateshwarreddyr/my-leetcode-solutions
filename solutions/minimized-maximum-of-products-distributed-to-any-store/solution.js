// Problem: Minimized Maximum of Products Distributed to Any Store
// LeetCode: https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
// Language: javascript
// Runtime: 20 ms
// Memory: 64.2 MB
// Submitted: 2025-11-12

/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {

    const canCut = (num) => {
        let sum = 0

        for (let e of quantities) {
            sum += Math.ceil(e / num)
        }

        return sum <= n
    }

    let lo = 0
    let hi = Math.max(...quantities)

    while (lo <= hi) {
        let mid = Math.floor(lo / 2 + hi / 2)

        if (canCut(mid)) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }


    return lo
};
