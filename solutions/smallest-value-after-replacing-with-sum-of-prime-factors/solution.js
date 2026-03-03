// Problem: Smallest Value After Replacing With Sum of Prime Factors
// LeetCode: https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/
// Language: javascript
// Runtime: 66 ms
// Memory: 42.5 MB
// Submitted: 2023-06-15

var smallestValue = function (n) {
    function sumofpf(n) {
        let s = 0
        for (let f = 2; f <= n;) {
            if (n % f === 0) {
                s += f
                n = n / f
            } else {
                f++
            }
        }
        return s
    }

    while (1) {
        let s = sumofpf(n)
        if (s === n) {
            return n
        } else {
            n = s
        }
    }
};

