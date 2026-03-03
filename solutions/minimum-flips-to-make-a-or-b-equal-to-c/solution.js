// Problem: Minimum Flips to Make a OR b Equal to c
// LeetCode: https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
// Language: javascript
// Runtime: 67 ms
// Memory: 41.2 MB
// Submitted: 2023-07-18

var minFlips = function (a, b, c) {
    let cc = 0;

    while (a || b || c) {
        let f = a & 1; // last bit set
        let s = b & 1;
        let t = c & 1;

        a >>= 1; // div by 2
        b >>= 1;
        c >>= 1;

        if (t === 0) {
            // need 0
            if (f & s) cc += 2;
            else if (f | s) cc++;
        } else {
            // need 1
            if ((f | s) === 0) cc++;
        }
    }

    return cc;
};
