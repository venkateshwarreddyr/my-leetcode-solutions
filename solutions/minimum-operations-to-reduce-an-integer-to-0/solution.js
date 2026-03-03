// Problem: Minimum Operations to Reduce an Integer to 0
// LeetCode: https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/
// Language: javascript
// Runtime: 59 ms
// Memory: 41.4 MB
// Submitted: 2023-06-07

cl = console.log;
const minOperations = function (n) {
    let an = 0;
    while (n) {
        if (n.toString(2).endsWith("11")) {
            an++;
            n++
        } else if (n.toString(2).endsWith("1")) {
            an++;
            n--;
        } else {
            n = n / 2;
        }
    }

    return an;
};

// 10001
// 1
11
