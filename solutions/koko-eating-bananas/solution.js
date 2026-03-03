// Problem: Koko Eating Bananas
// LeetCode: https://leetcode.com/problems/koko-eating-bananas/
// Language: javascript
// Runtime: 7 ms
// Memory: 58.8 MB
// Submitted: 2025-08-16

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (a, h) {
    let lo = 1, hi = Math.max(...a)

    const eat = (b) => {
        let h = 0

        for (let e of a) {
            h = h + Math.ceil(e / b)
        }

        return h
    }

    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)

        let tarh = eat(mid)

        if (tarh > h) lo = mid + 1
        else hi = mid - 1
    }

    return lo
};
