// Problem: Capacity To Ship Packages Within D Days
// LeetCode: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
// Language: javascript
// Runtime: 100 ms
// Memory: 45.8 MB
// Submitted: 2023-07-01

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (w, days) {
    let n = w.length
    let lo = Math.max(...w)
    let hi = w.reduce((a, c) => a + c, 0)

    function fn(m) {
        let sum = 0
        let days = 1
        for (let i = 0; i < n; i++) {
            if ((sum + w[i]) <= m) {
                sum += w[i]
            } else {
                days++
                sum = w[i]
            }
        }

        return days;
    }

    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        let an = fn(mid);
        if (an <= days) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return lo
};
/*
1,2,3,4,5,6,7,8,9,10
0,1,2,3,4,5,6,7,8, 9

    55/5
     =11
    
    10+1
    9+2
    8+3
    7+4
    6+5

 */
