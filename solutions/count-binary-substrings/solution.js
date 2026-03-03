// Problem: Count Binary Substrings
// LeetCode: https://leetcode.com/problems/count-binary-substrings/
// Language: javascript
// Runtime: 62 ms
// Memory: 45.7 MB
// Submitted: 2023-05-20

cl = console.log;

var countBinarySubstrings = function (s) {
    let n = s.length;

    let curr = 1, prev = 0, an=0;

    for (let i = 1; i < n; i++) {
        if (s[i] === s[i - 1]) {
            curr++
        } else {
            an+=Math.min(prev, curr)
            prev = curr;
            curr = 1;
        }
    }
    an+=Math.min(prev, curr)
    return an;
};
