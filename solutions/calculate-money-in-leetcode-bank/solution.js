// Problem: Calculate Money in Leetcode Bank
// LeetCode: https://leetcode.com/problems/calculate-money-in-leetcode-bank/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.6 MB
// Submitted: 2025-10-25

cl = console.log
var totalMoney = function (n) {
    let an = 0
    let c = 0;
    let m = 7;
    while (n > 7) {
        an += (m * (m + 1) / 2)
        an -= (c * (c + 1) / 2)

        m++;
        c++;
        n -= 7
    }
    an += ((n + c) * ((n + c) + 1) / 2)
    an -= (c * (c + 1) / 2)

    return an;
};
