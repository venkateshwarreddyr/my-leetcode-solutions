// Problem: Smallest All-Ones Multiple
// LeetCode: https://leetcode.com/problems/smallest-all-ones-multiple/
// Language: javascript
// Runtime: 15 ms
// Memory: 57.8 MB
// Submitted: 2025-12-29

var minAllOneMultiple = function (k) {
    if (k % 2 === 0) return -1;
    if (k % 5 === 0) return -1;
    let ones = "1".repeat(k);

    function divideIfExact(numStr, divisor) {
        let res = "";
        let rem = 0;

        let i = 1;
        for (let ch of numStr) {
            rem = rem * 10 + 1;
            // res += Math.floor(rem / divisor);
            rem %= divisor;

            if (rem === 0) return i;
            i++;
        }

        return -1;
    }
    let ans = divideIfExact(ones, k);
    return ans;
};

