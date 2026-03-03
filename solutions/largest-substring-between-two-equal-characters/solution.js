// Problem: Largest Substring Between Two Equal Characters
// LeetCode: https://leetcode.com/problems/largest-substring-between-two-equal-characters/
// Language: javascript
// Runtime: 54 ms
// Memory: 41.8 MB
// Submitted: 2023-05-23

cl = console.log
var maxLengthBetweenEqualCharacters = function (s) {
    let n = s.length
    let obj = {}
    let an = -1;

    for (let i = 0; i < n; i++) {
        if (obj[s[i]] !== undefined) {
            an = Math.max(an, i - 1 - obj[s[i]])
        } else {
            obj[s[i]] = i
        }
    }

    return an;
};
