// Problem: Maximum Tastiness of Candy Basket
// LeetCode: https://leetcode.com/problems/maximum-tastiness-of-candy-basket/
// Language: javascript
// Runtime: 112 ms
// Memory: 65.7 MB
// Submitted: 2025-11-04

/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
    price.sort((a, b) => a - b)

    function getCandies(mid) {

        let count = 1
        let left = price[0]

        for (let i = 1; i < price.length; i++) {
            if (price[i] - left >= mid) {
                left = price[i]
                count++
            }

        }

        return count >= k
    }


    let lo = 0
    let hi = 10 ** 9

    while (lo <= hi) {
        let mid = Math.floor(lo / 2 + hi / 2)
        if (getCandies(mid)) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }

    return hi

};
