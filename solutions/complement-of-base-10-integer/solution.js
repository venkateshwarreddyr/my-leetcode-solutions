// Problem: Complement of Base 10 Integer
// LeetCode: https://leetcode.com/problems/complement-of-base-10-integer/
// Language: javascript
// Runtime: 43 ms
// Memory: 42.4 MB
// Submitted: 2023-05-26

cl = console.log
var bitwiseComplement = function (n) {
    let an = 0
    n = n.toString(2)

    for (let j = n.length - 1; j > -1; j--) {
        an += (+n[j] ? 0 : Math.pow(2, n.length - j - 1))
    }

    return an;
};
