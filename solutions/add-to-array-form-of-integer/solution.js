// Problem: Add to Array-Form of Integer
// LeetCode: https://leetcode.com/problems/add-to-array-form-of-integer/
// Language: javascript
// Runtime: 124 ms
// Memory: 46.5 MB
// Submitted: 2023-05-29

cl = console.log
var addToArrayForm = function (a, k) {

    let carry = 0
    let n = a.length
    k = k.toString()
    let kn = k.length;
    let j = kn - 1
    let i = n - 1
    while (i > -1 || j > -1) {
        if (i < 0) {
            a.unshift(0)
            i = 0
        }
        let c = a[i] + Number(k[j] || 0) + carry
        carry = Math.trunc(c / 10)
        a[i] = c % 10
        j--;
        i--;
    }
    if (carry) {
        a.unshift(carry)
    }

    return a;
};
