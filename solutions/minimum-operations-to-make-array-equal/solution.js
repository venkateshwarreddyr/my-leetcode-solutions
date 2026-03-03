// Problem: Minimum Operations to Make Array Equal
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-array-equal/
// Language: javascript
// Runtime: 48 ms
// Memory: 42.4 MB
// Submitted: 2023-06-17

cl = console.log
var minOperations = function (n) {
    let an = 0
    if (n % 2 == 0)
        for (let i = 0; i < n / 2; i++)
            an += n - (n - (2 * i + 1))
    else
        for (let i = 1; i < n / 2; i++)
            an += n - (n - (2 * i))
    return an;
};
// 7
// [ 1, 3, 5, 7, 9, 11, 13 ]


