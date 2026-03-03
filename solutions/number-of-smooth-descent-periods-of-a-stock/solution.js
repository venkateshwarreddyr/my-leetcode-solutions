// Problem: Number of Smooth Descent Periods of a Stock
// LeetCode: https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/
// Language: javascript
// Runtime: 62 ms
// Memory: 52.1 MB
// Submitted: 2023-11-02

cl = console.log
/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (a) {
    let n = a.length
    let an = n


    for (let i = 0; i < n;) {
        let j = i
        for (; j < n; j++) {
            if (a[i] - a[j] === j - i) continue
            else break
        }

        let x = j - i
        an += (x * (x - 1) / 2)
        i = j
    }

    return an
};

/**

5+4+3+2+1



 */
