// Problem: Minimize XOR
// LeetCode: https://leetcode.com/problems/minimize-xor/
// Language: javascript
// Runtime: 2 ms
// Memory: 54.6 MB
// Submitted: 2026-02-02

const popCount = n => {
    let count = 0;
    for (; n; n >>= 1) count += n & 1;
    return count;
};

var minimizeXor = function (num1, num2) {
    let bitCount2 = popCount(num2);

    let x = 0;
    for (let i = 31; i >= 0 && bitCount2 > 0; i--) {
        if (num1 & (1 << i)) {
            x |= 1 << i;
            bitCount2--
        }
    }
    for (let i = 0; i <= 31 && bitCount2 > 0; i++) {
        if (!(x & (1 << i))) {
            x |= 1 << i;
            bitCount2--
        }
    }
    return x;
};

