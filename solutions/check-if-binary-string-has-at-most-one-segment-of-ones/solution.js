// Problem: Check if Binary String Has at Most One Segment of Ones
// LeetCode: https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
// Language: javascript
// Runtime: 62 ms
// Memory: 42 MB
// Submitted: 2023-05-23

cl = console.log
var checkOnesSegment = function (s) {
    return !s.includes('01')
};
