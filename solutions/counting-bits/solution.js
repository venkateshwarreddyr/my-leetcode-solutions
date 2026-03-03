// Problem: Counting Bits
// LeetCode: https://leetcode.com/problems/counting-bits/
// Language: javascript
// Runtime: 78 ms
// Memory: 48 MB
// Submitted: 2023-09-01

// Kernighan's Algorithm | Count Set Bits in an Integer
function countSetBits(n) {
    let cc = 0;
    while (n) {
        let rmsb = n & -n;
        n -= rmsb;
        cc++;
    }

    return cc
}

var countBits = function (n) {
    let an = []

    for (let i = 0; i <= n; i++) {
        an.push(countSetBits(i))
    }

    return an;
};
