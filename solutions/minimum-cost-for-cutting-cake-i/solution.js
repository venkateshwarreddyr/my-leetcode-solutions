// Problem: Minimum Cost for Cutting Cake I
// LeetCode: https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/
// Language: javascript
// Runtime: 119 ms
// Memory: 57.7 MB
// Submitted: 2024-07-14

/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hc
 * @param {number[]} vc
 * @return {number}
 */
var minimumCost = function (m, n, hc, vc) {
    hc.sort((a, b) => a - b)
    vc.sort((a, b) => a - b)
    console.log({hc, vc})
    let memo = {}
    function fn([h, v], hc, vc) {
        let key = [h, v].toString()
        if (!hc.length && !vc.length) return 0
        if(memo[key] !== undefined) return memo[key]

        let min = Infinity
        if (hc.length) {
            let e = hc.pop()
            min = Math.min(min, (e * (h)) + fn([h, v + 1], hc, vc))
            hc.push(e)
        }
        if (vc.length) {
            let e = vc.pop()
            min = Math.min(min, (e * (v)) + fn([h + 1, v], hc, vc))
            vc.push(e)
        }

        return memo[key] = min
    }

    return fn([1, 1], hc, vc)
};
